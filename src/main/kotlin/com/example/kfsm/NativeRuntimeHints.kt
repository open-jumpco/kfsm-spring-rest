package com.example.kfsm

import org.springframework.aot.hint.RuntimeHints
import org.springframework.aot.hint.RuntimeHintsRegistrar

class NativeRuntimeHints : RuntimeHintsRegistrar {
  override fun registerHints(hints: RuntimeHints, classLoader: ClassLoader?) {
    hints.resources().registerPattern("org/springframework/web/context/ContextLoader.properties")
    hints.reflection().registerType(TurnstileData::class.java)
  }
}

