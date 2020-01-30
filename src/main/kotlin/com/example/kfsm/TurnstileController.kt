package com.example.kfsm

import com.example.kfsm.TurnstileEvent.COIN
import com.example.kfsm.TurnstileEvent.PASS
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
class TurnstileResource(info: TurnstileInfo, vararg links: Link) : EntityModel<TurnstileInfo>(info, *links)

@Component
class TurnstileResourceAssembler : RepresentationModelAssemblerSupport<TurnstileInfo, TurnstileResource>(TurnstileController::class.java, TurnstileResource::class.java) {
    override fun toModel(entity: TurnstileInfo): TurnstileResource {
        val links = makelinks(entity)
        return TurnstileResource(entity, *links)
    }

    fun toCollection(entities: Iterable<TurnstileInfo>): CollectionModel<TurnstileResource> {
        val result = CollectionModel(entities.map { toModel(it) })
        result.add(linkTo(methodOn(TurnstileController::class.java).list()).withSelfRel())
        return result
    }

    private fun makelinks(entity: TurnstileInfo): Array<Link> {
        val links = mutableListOf(
            linkTo(methodOn(TurnstileController::class.java).get(entity.id)).withSelfRel()
        )
        val fsm = TurnstileFSM(entity)
        TurnstileEvent.values().forEach { event ->
            if (fsm.allowed(event)) {
                when (event) {
                    COIN -> links.add(
                        linkTo(methodOn(TurnstileController::class.java).coin(entity.id))
                            .withRel(event.name.toLowerCase())
                    )
                    PASS -> links.add(
                        linkTo(methodOn(TurnstileController::class.java).pass(entity.id))
                            .withRel(event.name.toLowerCase())
                    )
                }
            }
        }
        return links.toTypedArray()
    }
}

@RestController
class TurnstileController(val modelAssembler: TurnstileResourceAssembler) {
    val turnstiles = (1..5).map { it to TurnstileInfo(it) }.toMap().toMutableMap()
    @GetMapping("/")
    fun list(): ResponseEntity<CollectionModel<TurnstileResource>> {
        return ResponseEntity.ok(modelAssembler.toCollection(turnstiles.values))
    }

    @GetMapping("/{id}")
    fun get(@PathVariable("id") id: Int): ResponseEntity<TurnstileResource> {
        val turnstile = turnstiles[id]
        return if (turnstile != null) {
            ResponseEntity.ok(modelAssembler.toModel(turnstile))
        } else {
            ResponseEntity.notFound().build()
        }
    }

    @PostMapping("/{id}/coin")
    fun coin(@PathVariable("id") id: Int): ResponseEntity<TurnstileResource> {
        val turnstile = turnstiles[id] ?: return ResponseEntity.notFound().build()
        val fsm = TurnstileFSM(turnstile)
        val result = fsm.coin(turnstile)
        require(result != null) { "Expected result" }
        turnstiles[id] = result
        return ResponseEntity.ok(modelAssembler.toModel(result))
    }

    @PostMapping("/{id}/pass")
    fun pass(@PathVariable("id") id: Int): ResponseEntity<TurnstileResource> {
        val turnstile = turnstiles[id] ?: return ResponseEntity.notFound().build()
        val fsm = TurnstileFSM(turnstile)
        val result = fsm.pass(turnstile)
        require(result != null) { "Expected result" }
        turnstiles[id] = result
        return ResponseEntity.ok(modelAssembler.toModel(result))
    }
}
