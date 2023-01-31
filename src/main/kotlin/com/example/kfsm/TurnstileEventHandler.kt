package com.example.kfsm

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.SerializationFeature
import org.springframework.context.ApplicationListener
import org.springframework.hateoas.mediatype.collectionjson.Jackson2CollectionJsonModule
import org.springframework.hateoas.mediatype.hal.Jackson2HalModule
import org.springframework.stereotype.Service

@Service
class TurnstileEventHandler(
  private val broadcaster: WebSocketBroadcast,
  private val representationModelAssembler: TurnstileRepresentationModelAssembler
) : ApplicationListener<TurnstileApplicationEvent> {
  private val mapper = ObjectMapper()

  init {
    mapper.registerModule(Jackson2HalModule())
    mapper.registerModule(Jackson2CollectionJsonModule())
    mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false)
  }

  override fun onApplicationEvent(event: TurnstileApplicationEvent) {
    logger.info("onApplicationEvent:event={}", event)
    val data = mapper.writeValueAsString(representationModelAssembler.toModel(event.data))
    logger.info("onApplicationEvent:data={}", data)
    broadcaster.broadcast(data)
  }

}