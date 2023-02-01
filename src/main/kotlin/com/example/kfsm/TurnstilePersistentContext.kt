package com.example.kfsm

import com.example.kfsm.TurnstileState.LOCKED
import com.example.kfsm.TurnstileState.UNLOCKED
import jakarta.persistence.*
import jakarta.persistence.GenerationType.AUTO
import kotlinx.coroutines.*
import org.slf4j.LoggerFactory
import org.springframework.context.ApplicationContext
import org.springframework.data.repository.CrudRepository
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.http.HttpStatus.CONFLICT
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.web.bind.annotation.ResponseStatus

@ResponseStatus(CONFLICT)
class TurnstileAlarmException(message: String) : Exception(message)

@ResponseStatus(NOT_FOUND)
class TurnstileInfoNotFound(message: String) : Exception(message)

@Table(name = "TURNSTILE_INFO")
@Entity
data class TurnstileEntity(
  @Id @GeneratedValue(strategy = AUTO) var id: Long? = null,
  @Column(name = "LOCKED_B")
  val locked: Boolean = true,
  @Column(name = "MESSAGE_S")
  val message: String = ""
) {

  fun update(locked: Boolean? = null, message: String? = null) =
    copy(locked = locked ?: this.locked, message = message ?: "")

  fun toInfo() = TurnstileData(id!!, locked, message)
  override fun equals(other: Any?): Boolean {
    if (this === other) return true
    if (javaClass != other?.javaClass) return false

    other as TurnstileEntity

    if (id != other.id) return false

    return true
  }

  override fun hashCode(): Int {
    return id?.hashCode() ?: 0
  }
}

interface TurnstileRepository : PagingAndSortingRepository<TurnstileEntity, Long>,
  CrudRepository<TurnstileEntity, Long> {
}

class TurnstilePersistentContext(
  private val context: ApplicationContext,
  private val repository: TurnstileRepository,
  id: Long
) : TurnstileContext {
  companion object {
    private val logger = LoggerFactory.getLogger(TurnstilePersistentContext::class.java)
  }

  var entity: TurnstileEntity

  init {
    entity = repository.findById(id).orElseThrow { TurnstileInfoNotFound("TurnstileEntity $id not found") }
  }

  override val currentState: TurnstileState
    get() = if (entity.locked) LOCKED else UNLOCKED

  override suspend fun alarm(): TurnstileData? {
    throw TurnstileAlarmException("Alarm")
  }

  override suspend fun lock(): TurnstileData? {
    logger.info("lock:{}", entity.id)
    entity = repository.save(entity.update(locked = true, message = null))
    return entity.toInfo()
  }

  override suspend fun unlock(): TurnstileData? {
    logger.info("unlock:{}", entity.id)
    entity = repository.save(entity.update(locked = false, message = null))
    return entity.toInfo()
  }

  override suspend fun returnCoin(): TurnstileData? {
    logger.info("returnCoin:{}", entity.id)
    entity = repository.save(entity.update(message = "Coin returned"))
    clearMessage()
    return entity.toInfo()
  }

  override suspend fun timeout(): TurnstileData? {
    logger.info("timeout:{}", entity.id)
    entity = repository.save(entity.update(locked = true, message = "Timeout: coin returned"))
    val data = entity.toInfo()
    CoroutineScope(Dispatchers.IO).launch {
      context.publishEvent(TurnstileApplicationEvent(data, this))
      logger.info("publishEvent:data={}", data)
    }
    clearMessage()
    return data
  }

  private fun clearMessage() {
    CoroutineScope(Dispatchers.IO).async {
      delay(3000)
      entity = repository.save(entity.update(message = null))
      context.publishEvent(TurnstileApplicationEvent(entity.toInfo(), this))
      logger.info("Cleared Message")
    }
  }
}
