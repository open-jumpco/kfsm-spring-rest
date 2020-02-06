package com.example.kfsm

import com.example.kfsm.TurnstileEvent.COIN
import com.example.kfsm.TurnstileEvent.PASS
import com.example.kfsm.TurnstileState.LOCKED
import com.example.kfsm.TurnstileState.UNLOCKED
import io.jumpco.open.kfsm.stateMachine

data class TurnstileData(
    val id: Long,
    val locked: Boolean,
    val message: String
) {
    val currentState: TurnstileState
        get() = if (locked) LOCKED else UNLOCKED
}

interface TurnstileContext {
    val currentState: TurnstileState
    fun alarm(): TurnstileData?
    fun lock(): TurnstileData?
    fun unlock(): TurnstileData?
    fun returnCoin(): TurnstileData?
}

enum class TurnstileEvent {
    COIN,
    PASS
}

enum class TurnstileState {
    LOCKED,
    UNLOCKED
}

class TurnstileFSM(context: TurnstileContext) {
    private val fsm = definition.create(context)

    fun event(event: String) = fsm.sendEvent(TurnstileEvent.valueOf(event.toUpperCase()))
    fun coin() = fsm.sendEvent(COIN)
    fun pass() = fsm.sendEvent(PASS)
    fun allowed(event: TurnstileEvent) = fsm.allowed().contains(event)

    companion object {
        private val definition = stateMachine(
            TurnstileState.values().toSet(),
            TurnstileEvent.values().toSet(),
            TurnstileContext::class,
            Any::class,
            TurnstileData::class
        ) {
            defaultInitialState = LOCKED
            initialState { currentState }
            default {
                action { _, _, _ ->
                    alarm()
                }
            }
            whenState(LOCKED) {
                onEvent(COIN to UNLOCKED) {
                    unlock()
                }
            }
            whenState(UNLOCKED) {
                onEvent(PASS to LOCKED) {
                    lock()
                }
                onEvent(COIN) { info ->
                    require(info != null) { "Info required" }
                    returnCoin()
                }
            }
        }.build()

        fun defaultInitialState() = definition.defaultInitialState ?: LOCKED
        fun possibleEvents(state: TurnstileState) = definition.possibleEvents(state, false)
    }
}
