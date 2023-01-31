package com.example.kfsm

import org.springframework.stereotype.Component
import org.springframework.web.socket.TextMessage

@Component
class TurnstileBroadcaster(private val webSocketHandler: WebSocketHandler) : WebSocketBroadcast {
  override fun broadcast(payload: String) {
    val message = TextMessage(payload)
    webSocketHandler.broadcast(message)
  }
}