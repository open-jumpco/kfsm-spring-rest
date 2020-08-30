package com.example.kfsm

import org.springframework.hateoas.EntityModel
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn
import org.springframework.http.HttpStatus.EXPECTATION_FAILED
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

data class SystemInfo(
        val apiVersion: Int,
        val apiName: String
)

@RestController
@CrossOrigin(origins = ["*"])
class ApiInfoController {
    val systemInfo = SystemInfo(1, "Turnstile")

    @GetMapping("/api", produces = [org.springframework.http.MediaType.APPLICATION_JSON_VALUE])
    fun api(@RequestParam("requestedVersion", required = false) requestedVersion: Int?): ResponseEntity<*> {
        if (requestedVersion != null && requestedVersion != systemInfo.apiVersion) {
            return ResponseEntity.status(EXPECTATION_FAILED)
                    .body("Server doesn't support API requested version:$requestedVersion Available version is ${systemInfo.apiVersion} ")
        }
        val links = listOf(linkTo(methodOn(ApiInfoController::class.java).api(systemInfo.apiVersion)).withSelfRel(),
                linkTo(methodOn(TurnstileController::class.java).create()).withRel("create"),
                linkTo(methodOn(TurnstileController::class.java).list()).withRel("list")
        )
        return ResponseEntity.ok(EntityModel.of(systemInfo, links))
    }
}
