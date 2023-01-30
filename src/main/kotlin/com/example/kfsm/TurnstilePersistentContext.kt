package com.example.kfsm

import com.example.kfsm.TurnstileState.LOCKED
import com.example.kfsm.TurnstileState.UNLOCKED

import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.http.HttpStatus.CONFLICT
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.web.bind.annotation.ResponseStatus
import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType.AUTO
import jakarta.persistence.Id
import jakarta.persistence.Table
import org.springframework.data.repository.CrudRepository

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
}

interface TurnstileRepository : PagingAndSortingRepository<TurnstileEntity, Long>, CrudRepository<TurnstileEntity, Long> {
}

class TurnstilePersistentContext(private val repository: TurnstileRepository, id: Long) : TurnstileContext {
    var entity: TurnstileEntity

    init {
        entity = repository.findById(id).orElseThrow { TurnstileInfoNotFound("TurnstileEntity $id not found") }
    }

    override val currentState: TurnstileState
        get() = if (entity.locked) LOCKED else UNLOCKED

    override fun alarm(): TurnstileData? {
        throw TurnstileAlarmException("Alarm")
    }

    override fun lock(): TurnstileData? {
        entity = repository.save(entity.update(locked = true))
        return entity.toInfo()
    }

    override fun unlock(): TurnstileData? {
        entity = repository.save(entity.update(locked = false))
        return entity.toInfo()
    }

    override fun returnCoin(): TurnstileData? {
        entity = repository.save(entity.update(message = "Coin returned"))
        return entity.toInfo()
    }
}
