import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
plugins {
    id("org.springframework.boot") version "2.4.5"
    id("io.spring.dependency-management") version "1.0.11.RELEASE"
    kotlin("jvm") version "1.4.32"
    kotlin("plugin.spring") version "1.4.32"
    kotlin("plugin.jpa") version "1.4.32"
    id("io.jumpco.open.kfsm.viz-plugin") version "1.4.32.1"
}

group = "com.example"
version = "1.4.0-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_11

repositories {
    mavenLocal()
    mavenCentral()
    maven("https://oss.sonatype.org/content/repositories/snapshots")
}

dependencies {
    implementation("io.jumpco.open:kfsm-jvm:1.4.32")

    implementation("org.springframework.boot:spring-boot-starter-hateoas")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")

    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")

    implementation("org.springdoc:springdoc-openapi-ui:1.5.8")
    implementation("org.springdoc:springdoc-openapi-hateoas:1.5.8")
    implementation("org.springdoc:springdoc-openapi-kotlin:1.5.8")

    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

    runtimeOnly("com.h2database:h2")

    developmentOnly("org.springframework.boot:spring-boot-devtools")
    testImplementation("org.springframework.boot:spring-boot-starter-test") {
        exclude(group = "org.junit.vintage", module = "junit-vintage-engine")
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "11"
    }
}

val assemble by tasks.existing {
    dependsOn("generateFsmViz")
}

configure<io.jumpco.open.kfsm.gradle.VizPluginExtension> {
    fsm("TurnstileFSM") {
        outputFolder = file("generated")
        input = file("src/main/kotlin/com/example/kfsm/TurnstileFSM.kt")
        isGeneratePlantUml = true // Required default is false
        isGenerateAsciidoc = true // Required default is false
        output = "turnstile"
    }
}
