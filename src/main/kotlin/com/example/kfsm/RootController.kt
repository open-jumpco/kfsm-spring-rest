package com.example.kfsm

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.servlet.view.RedirectView

@Controller
class RootController {
    @GetMapping("/api-docs")
    fun apiDocs() = RedirectView("/swagger-ui.html")
    @GetMapping("/")
    fun root() = RedirectView("/index.html")
}
