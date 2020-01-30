package com.example.kfsm

import io.jumpco.open.kfsm.stateMachine
import java.util.*

data class TurnstileInfo(
    val locked: Boolean,
    val message: String = "",
    val alarm: Boolean = false
)

interface Turnstile {
    val locked: Boolean
    fun lock(): TurnstileInfo
    fun unlock(): TurnstileInfo
    fun returnCoin(): TurnstileInfo
    fun alarm(): TurnstileInfo
}

enum class TurnstileEvent {
    COIN,
    PASS
}

enum class TurnstileState {
    LOCKED,
    UNLOCKED
}

class TurnstileFSM(val turnstile: Turnstile) {
    companion object {
        private val definition = stateMachine(
            TurnstileState.values().toSet(),
            TurnstileEvent.values().toSet(), Turnstile::class,
            TurnstileInfo::class,
            TurnstileInfo::class
        ) {
            initialState { if (locked) TurnstileState.LOCKED else TurnstileState.UNLOCKED }
            default {
                action { _, _, _ ->
                    alarm()
                }
            }
            whenState(TurnstileState.LOCKED) {
                onEvent(TurnstileEvent.COIN to TurnstileState.UNLOCKED) {
                    unlock()
                }
            }
            whenState(TurnstileState.UNLOCKED) {
                onEvent(TurnstileEvent.PASS to TurnstileState.LOCKED) {
                    lock()
                }
                onEvent(TurnstileEvent.COIN) {
                    returnCoin()
                }
            }
        }.build()
    }

    private val fsm = definition.create(turnstile)
    fun currentState() = fsm.currentState
    fun coin() = fsm.sendEvent(TurnstileEvent.COIN)
    fun pass() = fsm.sendEvent(TurnstileEvent.PASS)
    fun allowed(event: TurnstileEvent) = fsm.allowed().contains(event)
}
