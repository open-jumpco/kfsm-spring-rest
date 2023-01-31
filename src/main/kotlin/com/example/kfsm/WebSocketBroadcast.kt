package com.example.kfsm

interface WebSocketBroadcast {
  fun broadcast(payload: String)
}