package com.example.kfsm

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

import org.springframework.hateoas.config.EnableHypermediaSupport
import org.springframework.hateoas.config.EnableHypermediaSupport.HypermediaType
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType.H2
import javax.sql.DataSource

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
    runApplication<KfsmApplication>(*args)
}
