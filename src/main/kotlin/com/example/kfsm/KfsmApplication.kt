package com.example.kfsm

import org.slf4j.LoggerFactory
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

import org.springframework.hateoas.config.EnableHypermediaSupport
import org.springframework.hateoas.config.EnableHypermediaSupport.HypermediaType
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType.H2
import org.springframework.util.StringUtils
import java.net.InetAddress
import java.net.UnknownHostException
import javax.sql.DataSource
val logger = LoggerFactory.getLogger(KfsmApplication::class.java)
@SpringBootApplication
@EnableHypermediaSupport(type = [HypermediaType.HAL])
@EnableJpaRepositories
class KfsmApplication {
    @Bean
    fun dataSource(): DataSource? {
        val builder = EmbeddedDatabaseBuilder()
        return builder.setType(H2).build()
    }
}

fun main(args: Array<String>) {
    val startTime = System.currentTimeMillis()
    runApplication<KfsmApplication>(*args).also {
        val turnstileService = it.getBean(TurnstileService::class.java)
        turnstileService.create()
        logger.info("Created one turnstile")
        val duration = System.currentTimeMillis() - startTime
        val env = it.environment
        val protocol = if (env.getProperty("server.ssl.key-store") != null) "https" else "http"
        val serverPort = env.getProperty("server.port", "8080")
        val contextPath = env.getProperty("server.servlet.context-path").let {
            if(!StringUtils.hasText(it)) "/" else it
        }
        var hostAddress = "localhost"
        try {
            hostAddress = InetAddress.getLocalHost().hostAddress
        } catch (e: UnknownHostException) {
            logger.warn("The host name could not be determined, using `localhost` as fallback")
        }
        logger.info("start:application '{}' is running!",env.getProperty("spring.application.name", "kfsm-spring"))
        logger.info("start:url:local:{}://localhost:{}{}", protocol, serverPort, contextPath)
        logger.info("start:url:external:{}://{}:{}{}", protocol, hostAddress, serverPort, contextPath)
        logger.info("start:time:{}ms", duration)
    }
}
