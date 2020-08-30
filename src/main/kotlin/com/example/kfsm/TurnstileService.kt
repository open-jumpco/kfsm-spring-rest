package com.example.kfsm

import org.springframework.data.domain.Page
import org.springframework.data.domain.PageImpl
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
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

    fun list(pageable: Pageable?): Page<TurnstileData> {
        val page = turnstileRepository.findAll(pageable ?: PageRequest.of(0, 10))
        return PageImpl(page.content.map { it.toInfo() }, page.pageable, page.totalElements)
    }

    fun event(id: Long, event: String): TurnstileData {
        val fsm = TurnstileFSM(TurnstilePersistentContext(turnstileRepository, id))
        return fsm.event(event) ?: error("Expected result from event")
    }

    fun delete(id: Long) {
        turnstileRepository.deleteById(id)
    }

    companion object {
        fun possibleEvents(data: TurnstileData): Set<String> {
            return TurnstileFSM.possibleEvents(data.currentState).map { it.name.toLowerCase() }.toSet()
        }
    }
}
