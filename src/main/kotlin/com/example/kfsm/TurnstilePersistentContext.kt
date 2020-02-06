package com.example.kfsm

import com.example.kfsm.TurnstileState.LOCKED
import com.example.kfsm.TurnstileState.UNLOCKED
import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Column
import org.springframework.data.relational.core.mapping.Table
import org.springframework.data.repository.CrudRepository
import org.springframework.http.HttpStatus.CONFLICT
import org.springframework.http.HttpStatus.NOT_FOUND
import org.springframework.web.bind.annotation.ResponseStatus

@ResponseStatus(CONFLICT)
class TurnstileAlarmException(message: String) : Exception(message)

@ResponseStatus(NOT_FOUND)
class TurnstileInfoNotFound(message: String) : Exception(message)

@Table("TURNSTILE_INFO")
data class TurnstileEntity(
    @Id var id: Long? = null,
    @Column("LOCKED_B")
    val locked: Boolean = true,
    @Column("MESSAGE_S")
    val message: String = ""
) {
    fun update(locked: Boolean? = null, message: String? = null) =
        copy(locked = locked ?: this.locked, message = message ?: "")

    fun toInfo() = TurnstileData(id!!, locked, message)
}

interface TurnstileRepository : CrudRepository<TurnstileEntity, Long>

class TurnstilePersistentContext(private val turnstileRepository: TurnstileRepository, id: Long) : TurnstileContext {
    val turnstileInfo: TurnstileEntity

    init {
        turnstileInfo =
            turnstileRepository.findById(id).orElseThrow { TurnstileInfoNotFound("TurnstileEntity $id not found") }
    }

    override val currentState: TurnstileState
        get() = if (turnstileInfo.locked) LOCKED else UNLOCKED

    override fun alarm(): TurnstileData? {
        throw TurnstileAlarmException("Alarm")
    }

    override fun lock(): TurnstileData? {
        return turnstileRepository.save(turnstileInfo.update(locked = true)).toInfo()
    }

    override fun unlock(): TurnstileData? {
        return turnstileRepository.save(turnstileInfo.update(locked = false)).toInfo()
    }

    override fun returnCoin(): TurnstileData? {
        return turnstileRepository.save(turnstileInfo.update(message = "Return Coin")).toInfo()
    }
}
