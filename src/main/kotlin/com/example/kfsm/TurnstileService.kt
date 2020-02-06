package com.example.kfsm

import org.springframework.stereotype.Service

@Service
class TurnstileService(private val turnstileRepository: TurnstileRepository) {
    fun create(): TurnstileData {
        return turnstileRepository.save(TurnstileEntity()).toInfo()
    }

    fun get(id: Long): TurnstileData {
        return turnstileRepository.findById(id).orElseThrow { TurnstileInfoNotFound("TurnstileInfo $id not found") }
            .toInfo()
    }

    fun list(): Iterable<TurnstileData> {
        return turnstileRepository.findAll().map { it.toInfo() }
    }

    fun event(id: Long, event: String): TurnstileData {
        val fsm = TurnstileFSM(TurnstilePersistentContext(turnstileRepository, id))
        return fsm.event(event) ?: error("Expected result from event")
    }
    companion object {
        fun possibleEvents(data: TurnstileData): Set<String> {
            return TurnstileFSM.possibleEvents(data.currentState).map { it.name.toLowerCase() }.toSet()
        }
    }
}
