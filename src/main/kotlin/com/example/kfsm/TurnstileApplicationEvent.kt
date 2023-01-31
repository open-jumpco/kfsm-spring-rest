package com.example.kfsm

import org.springframework.context.ApplicationEvent

class TurnstileApplicationEvent(val data: TurnstileData, source: Any) : ApplicationEvent(source) {
  override fun equals(other: Any?): Boolean {
    other as TurnstileApplicationEvent
    return data == other.data
  }

  override fun hashCode(): Int {
    return data.hashCode()
  }

  override fun toString(): String {
    return data.toString()
  }
}