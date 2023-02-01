package com.example.kfsm

import com.example.kfsm.TurnstileEvent.COIN
import com.example.kfsm.TurnstileEvent.PASS
import com.example.kfsm.TurnstileState.LOCKED
import com.example.kfsm.TurnstileState.UNLOCKED
import io.jumpco.open.kfsm.async.asyncStateMachine
import kotlinx.coroutines.CoroutineScope
import org.springframework.hateoas.server.core.Relation

@Relation(itemRelation = "turnstile", collectionRelation = "turnstiles")
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
  suspend fun alarm(): TurnstileData?
  suspend fun lock(): TurnstileData?
  suspend fun unlock(): TurnstileData?
  suspend fun returnCoin(): TurnstileData?
  suspend fun timeout(): TurnstileData?
}

enum class TurnstileEvent {
  COIN,
  PASS
}

enum class TurnstileState {
  LOCKED,
  UNLOCKED
}

class TurnstileFSM(context: TurnstileContext, coroutineScope: CoroutineScope) {
  private val fsm = definition.create(context, coroutineScope)

  suspend fun event(event: String): TurnstileData? {
    try {
      logger.info("event:start:$event")
      return fsm.sendEvent(TurnstileEvent.valueOf(event.uppercase()))
    } finally {
      logger.info("event:end:$event")
    }

  }

  suspend fun coin() = fsm.sendEvent(COIN)
  suspend fun pass() = fsm.sendEvent(PASS)
  fun allowed(event: TurnstileEvent) = fsm.allowed().contains(event)

  companion object {
    private val definition = asyncStateMachine(
      TurnstileState.values().toSet(),
      TurnstileEvent.values().toSet(),
      TurnstileContext::class,
      Any::class,
      TurnstileData::class
    ) {
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
        timeout(LOCKED, timeout = 5000) {
          timeout()
        }
        onEvent(PASS to LOCKED) {
          lock()
        }
        onEvent(COIN) {
          returnCoin()
        }
      }
    }.build()

    fun possibleEvents(state: TurnstileState) = definition.possibleEvents(state, false)
  }
}
