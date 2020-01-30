package com.example.kfsm

import com.example.kfsm.TurnstileEvent.COIN
import com.example.kfsm.TurnstileEvent.PASS
import org.springframework.hateoas.EntityModel
import org.springframework.hateoas.Link
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

class TurnstileHandler(var _locked: Boolean) : Turnstile {

    override val locked: Boolean
        get() = _locked

    override fun lock(): TurnstileInfo {
        _locked = true
        return TurnstileInfo(locked)
    }

    override fun unlock(): TurnstileInfo {
        _locked = false
        return TurnstileInfo(locked)
    }

    override fun returnCoin() = TurnstileInfo(locked, "Return Coin")

    override fun alarm() = TurnstileInfo(locked, "Alarm", true)
}

class TurnstileResource(info: TurnstileInfo, vararg links: Link) : EntityModel<TurnstileInfo>(info, *links)

@Component
class TurnstileResourceAssembler : RepresentationModelAssemblerSupport<TurnstileInfo, TurnstileResource>(TurnstileController::class.java, TurnstileResource::class.java) {
    override fun toModel(entity: TurnstileInfo): TurnstileResource {
        val links = makelinks(entity)
        return TurnstileResource(entity, *links)
    }

    private fun makelinks(entity: TurnstileInfo): Array<Link> {
        val links = mutableListOf(
            linkTo(
                methodOn(TurnstileController::class.java)
                    .start()
            ).withRel("start")
        )
        val fsm = TurnstileFSM(TurnstileHandler(entity.locked))
        TurnstileEvent.values().forEach { event ->
            if (fsm.allowed(event)) {
                when (event) {
                    COIN -> links.add(
                        linkTo(
                            methodOn(
                                TurnstileController::class.java
                            )
                                .coin(entity.locked)
                        ).withRel(event.name.toString().toLowerCase())
                    )
                    PASS -> links.add(
                        linkTo(
                            methodOn(TurnstileController::class.java)
                                .pass(entity.locked)
                        ).withRel(event.name.toString().toLowerCase())
                    )
                }
            }
        }
        return links.toTypedArray()
    }
}

@RestController
class TurnstileController(val modelAssembler: TurnstileResourceAssembler) {

    @GetMapping("/")
    fun start(): ResponseEntity<TurnstileResource> {
        return ResponseEntity.ok(modelAssembler.toModel(TurnstileInfo(true)))
    }

    @PostMapping("/coin")
    fun coin(@RequestParam("locked") locked: Boolean): ResponseEntity<TurnstileResource> {
        val handler = TurnstileHandler(locked)
        val fsm = TurnstileFSM(handler)
        val result = fsm.coin()
        require(result != null) { "Expected result" }
        return ResponseEntity.ok(modelAssembler.toModel(result))
    }

    @PostMapping("/pass")
    fun pass(@RequestParam("locked") locked: Boolean): ResponseEntity<TurnstileResource> {
        val handler = TurnstileHandler(locked)
        val fsm = TurnstileFSM(handler)
        val result = fsm.pass()
        require(result != null) { "Expected result" }
        return ResponseEntity.ok(modelAssembler.toModel(result))
    }
}
