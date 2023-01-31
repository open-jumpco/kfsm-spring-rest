package com.example.kfsm

import kotlinx.coroutines.runBlocking
import org.springframework.data.domain.Page
import org.springframework.data.web.PagedResourcesAssembler
import org.springframework.hateoas.CollectionModel
import org.springframework.hateoas.EntityModel
import org.springframework.hateoas.Link
import org.springframework.hateoas.PagedModel
import org.springframework.hateoas.server.SimpleRepresentationModelAssembler
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn
import org.springframework.stereotype.Component

@Component
class TurnstileRepresentationModelAssembler(
  private val pageAssembler: PagedResourcesAssembler<TurnstileData>
) : SimpleRepresentationModelAssembler<TurnstileData> {
  override fun addLinks(model: EntityModel<TurnstileData>) {

    model.add(makeLinks(model.content!!))
  }

  override fun addLinks(resources: CollectionModel<EntityModel<TurnstileData>>) {
    resources.content.forEach {
      it.add(makeLinks(it.content!!))
    }
  }

  private fun makeLinks(item: TurnstileData): Iterable<Link> {
    val links = mutableListOf<Link>()
    val controllerClass = TurnstileController::class.java
    links.add(linkTo(methodOn(controllerClass).get(item.id)).withSelfRel())
    links.add(linkTo(methodOn(controllerClass).delete(item.id)).withRel("delete"))
    runBlocking {
      TurnstileService.possibleEvents(item).forEach { event ->
        links.add(
          linkTo(methodOn(controllerClass).event(item.id, event)).withRel(event)
        )
      }
    }
    return links
  }

  fun toPage(page: Page<TurnstileData>): PagedModel<EntityModel<TurnstileData>> {
    return pageAssembler.toModel(page, this)
  }
}
