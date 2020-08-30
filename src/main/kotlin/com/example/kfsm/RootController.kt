package com.example.kfsm

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.servlet.view.RedirectView

@Controller
class RootController {
    @GetMapping("/")
    fun root() = RedirectView("/swagger-ui.html")
}
