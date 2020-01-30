package com.example.kfsm

import com.example.kfsm.TurnstileEvent.COIN
import com.example.kfsm.TurnstileEvent.PASS
import com.example.kfsm.TurnstileState.LOCKED
import com.example.kfsm.TurnstileState.UNLOCKED
import io.jumpco.open.kfsm.stateMachine

data class TurnstileInfo(
    val id: Int,
    val locked: Boolean = true,
    val message: String = "",
    val alarm: Boolean = false
)

interface Turnstile {
    fun lock(info: TurnstileInfo): TurnstileInfo
    fun unlock(info: TurnstileInfo): TurnstileInfo
    fun returnCoin(info: TurnstileInfo): TurnstileInfo
    fun alarm(info: TurnstileInfo): TurnstileInfo
}

enum class TurnstileEvent {
    COIN,
    PASS
}

enum class TurnstileState {
    LOCKED,
    UNLOCKED
}

class TurnstileFSM(turnstile: Turnstile, locked: Boolean) {
    private val fsm = definition.create(turnstile, if (locked) LOCKED else UNLOCKED)

    fun coin(info: TurnstileInfo) = fsm.sendEvent(COIN, info)
    fun pass(info: TurnstileInfo) = fsm.sendEvent(PASS, info)
    fun allowed(event: TurnstileEvent) = fsm.allowed().contains(event)
    companion object {
        private val definition = stateMachine(
            TurnstileState.values().toSet(),
            TurnstileEvent.values().toSet(), Turnstile::class,
            TurnstileInfo::class,
            TurnstileInfo::class
        ) {
            default {
                action { _, _, info ->
                    require(info != null) { "Info required" }
                    alarm(info)
                }
            }
            whenState(LOCKED) {
                onEvent(COIN to UNLOCKED) { info ->
                    require(info != null) { "Info required" }
                    unlock(info)
                }
            }
            whenState(UNLOCKED) {
                onEvent(PASS to LOCKED) { info ->
                    require(info != null) { "Info required" }
                    lock(info)
                }
                onEvent(COIN) { info ->
                    require(info != null) { "Info required" }
                    returnCoin(info)
                }
            }
        }.build()
    }
}
