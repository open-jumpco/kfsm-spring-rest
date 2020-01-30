package com.example.kfsm

import com.example.kfsm.TurnstileEvent.COIN
import com.example.kfsm.TurnstileEvent.PASS
import com.example.kfsm.TurnstileState.LOCKED
import com.example.kfsm.TurnstileState.UNLOCKED
import io.jumpco.open.kfsm.stateMachine
import org.springframework.http.HttpStatus.CONFLICT
import org.springframework.web.bind.annotation.ResponseStatus

data class TurnstileInfo(
    val id: Int,
    val locked: Boolean = true,
    val message: String = ""
)

enum class TurnstileEvent {
    COIN,
    PASS
}

enum class TurnstileState {
    LOCKED,
    UNLOCKED
}

@ResponseStatus(CONFLICT)
class TurnstileAlarmException(message: String) : Exception(message) {
}

class TurnstileFSM(turnstile: TurnstileInfo) {
    private val fsm = definition.create(turnstile)

    fun coin(info: TurnstileInfo) = fsm.sendEvent(COIN, info)
    fun pass(info: TurnstileInfo) = fsm.sendEvent(PASS, info)
    fun allowed(event: TurnstileEvent) = fsm.allowed().contains(event)

    companion object {
        private val definition = stateMachine(
            TurnstileState.values().toSet(),
            TurnstileEvent.values().toSet(),
            TurnstileInfo::class,
            TurnstileInfo::class,
            TurnstileInfo::class
        ) {
            initialState { if (locked) LOCKED else UNLOCKED }
            default {
                action { _, _, info ->
                    throw TurnstileAlarmException("Alarm")
                }
            }
            whenState(LOCKED) {
                onEvent(COIN to UNLOCKED) { info ->
                    require(info != null) { "Info required" }
                    info.copy(locked = false, message = "")
                }
            }
            whenState(UNLOCKED) {
                onEvent(PASS to LOCKED) { info ->
                    require(info != null) { "Info required" }
                    info.copy(locked = true, message = "")
                }
                onEvent(COIN) { info ->
                    require(info != null) { "Info required" }
                    info.copy(message = "Return Coin")
                }
            }
        }.build()
    }
}
