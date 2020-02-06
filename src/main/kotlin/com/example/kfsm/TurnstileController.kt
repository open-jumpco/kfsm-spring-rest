package com.example.kfsm

import org.springframework.hateoas.CollectionModel
import org.springframework.hateoas.EntityModel
import org.springframework.hateoas.Link
import org.springframework.hateoas.server.core.Relation
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RestController
import javax.xml.bind.annotation.XmlRootElement

@XmlRootElement
@Relation(collectionRelation = "turnstiles")
class TurnstileResource(data: TurnstileData, vararg links: Link) : EntityModel<TurnstileData>(data, *links)

@Component
class TurnstileResourceAssembler : RepresentationModelAssemblerSupport<TurnstileData, TurnstileResource>(TurnstileController::class.java, TurnstileResource::class.java) {
    override fun toModel(entity: TurnstileData): TurnstileResource {
        val links = makelinks(entity)
        return TurnstileResource(entity, *links)
    }

    fun toCollection(entities: Iterable<TurnstileData>): CollectionModel<TurnstileResource> {
        val result = CollectionModel(entities.map { toModel(it) })
        result.add(linkTo(methodOn(TurnstileController::class.java).list()).withSelfRel())
        return result
    }

    private fun makelinks(entity: TurnstileData): Array<Link> {
        val links = mutableListOf(
            linkTo(methodOn(TurnstileController::class.java).get(entity.id)).withSelfRel()
        )
        TurnstileService.possibleEvents(entity).forEach { event ->
            links.add(
                linkTo(methodOn(TurnstileController::class.java).event(entity.id, event))
                    .withRel(event)
            )
        }
    }

    return links.toTypedArray()
}
}

@RestController
class TurnstileController(
    private val modelAssembler: TurnstileResourceAssembler,
    private val turnstileService: TurnstileService
) {
    @GetMapping("/")
    fun list(): ResponseEntity<CollectionModel<TurnstileResource>> {
        return ResponseEntity.ok(modelAssembler.toCollection(turnstileService.list()))
    }

    @PostMapping("/")
    fun create(): ResponseEntity<TurnstileResource> {
        return ResponseEntity.ok(modelAssembler.toModel(turnstileService.create()))
    }

    @GetMapping("/{id}")
    fun get(@PathVariable("id") id: Long): ResponseEntity<TurnstileResource> {
        return ResponseEntity.ok(modelAssembler.toModel(turnstileService.get(id)))
    }

    @PostMapping("/{id}/{event}")
    fun event(@PathVariable("id") id: Long, @PathVariable("event") event: String): ResponseEntity<TurnstileResource> {
        return ResponseEntity.ok(modelAssembler.toModel(turnstileService.event(id, event)))
    }
}
