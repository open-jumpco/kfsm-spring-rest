package com.example.kfsm

import org.springframework.data.domain.Pageable
import org.springframework.data.web.PageableDefault
import org.springframework.hateoas.EntityModel
import org.springframework.hateoas.PagedModel
import org.springframework.http.HttpStatus.OK
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = ["*"])
@RequestMapping("/api/turnstile", produces = [MediaType.APPLICATION_JSON_VALUE])
class TurnstileController(
        private val representationModelAssembler: TurnstileRepresentationModelAssembler,
        private val turnstileService: TurnstileService
) {
    @GetMapping("/")
    fun list(pageable: Pageable? = null): ResponseEntity<PagedModel<EntityModel<TurnstileData>>> {
        return ResponseEntity.ok(representationModelAssembler.toPage(turnstileService.list(pageable)))
    }

    @PostMapping("/")
    fun create(): ResponseEntity<EntityModel<TurnstileData>> {
        return ResponseEntity.ok(representationModelAssembler.toModel(turnstileService.create()))
    }

    @GetMapping("/{id}")
    fun get(@PathVariable("id") id: Long): ResponseEntity<EntityModel<TurnstileData>> {
        return ResponseEntity.ok(representationModelAssembler.toModel(turnstileService.get(id)))
    }

    @PostMapping("/{id}/{event}")
    fun event(@PathVariable("id") id: Long,
              @PathVariable("event") event: String): ResponseEntity<EntityModel<TurnstileData>> {
        return ResponseEntity.ok(representationModelAssembler.toModel(turnstileService.event(id, event)))
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable("id") id: Long): ResponseEntity<Void> {
        turnstileService.delete(id);
        return ResponseEntity.status(OK).build()
    }
}
