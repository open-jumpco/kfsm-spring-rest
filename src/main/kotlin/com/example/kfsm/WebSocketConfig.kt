package com.example.kfsm

import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Component
import org.springframework.web.socket.CloseStatus
import org.springframework.web.socket.WebSocketMessage
import org.springframework.web.socket.WebSocketSession
import org.springframework.web.socket.config.annotation.EnableWebSocket
import org.springframework.web.socket.config.annotation.WebSocketConfigurer
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry
import org.springframework.web.socket.handler.TextWebSocketHandler

@Configuration
@EnableWebSocket
class WebSocketConfig(private val wsHandler: WebSocketHandler) : WebSocketConfigurer {
  override fun registerWebSocketHandlers(registry: WebSocketHandlerRegistry) {
    registry.addHandler(wsHandler, "/ws").setAllowedOriginPatterns("*")
  }
}

@Component
class WebSocketHandler : TextWebSocketHandler() {
  companion object {
    private val logger = LoggerFactory.getLogger(WebSocketHandler::class.java)
  }

  private val webSocketSessions = mutableListOf<WebSocketSession>()

  override fun afterConnectionEstablished(session: WebSocketSession) {
    logger.info("connected:{}:{}:{}", session.id, session.remoteAddress, session.attributes)
    super.afterConnectionEstablished(session)
    synchronized(webSocketSessions) {
      webSocketSessions.add(session)
    }
  }


  override fun afterConnectionClosed(session: WebSocketSession, status: CloseStatus) {
    logger.info("disconnected:{}:{}:{}", status, session.id, session.remoteAddress)
    super.afterConnectionClosed(session, status)
    synchronized(webSocketSessions) {
      webSocketSessions.remove(session)
    }
  }

  fun broadcast(message: WebSocketMessage<*>) {
    logger.info("broadcast:{}", message)
    val sessions = mutableListOf<WebSocketSession>()
    synchronized(webSocketSessions) {
      sessions.addAll(webSocketSessions)
    }
    for (session in sessions) {
      session.sendMessage(message)
    }
    logger.info("broadcast:sent")
  }
}
