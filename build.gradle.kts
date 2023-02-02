import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
  id("org.springframework.boot") version "3.0.2"
  id("io.spring.dependency-management") version "1.1.0"
  id("org.graalvm.buildtools.native") version "0.9.18"
  kotlin("jvm") version "1.7.22"
  kotlin("plugin.spring") version "1.7.22"
  kotlin("plugin.jpa") version "1.7.22"
  id("io.jumpco.open.kfsm.viz-plugin") version "1.5.2.4"
}

group = "com.example"
version = "1.7.0-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
  mavenLocal()
  mavenCentral()
  maven("https://oss.sonatype.org/content/repositories/snapshots")
}

dependencies {
  implementation("io.jumpco.open:kfsm-jvm:1.6.1")

  implementation("org.springframework.boot:spring-boot-starter-actuator")
  implementation("org.springframework.boot:spring-boot-starter-hateoas")
  implementation("org.springframework.boot:spring-boot-starter-web")
  implementation("org.springframework.boot:spring-boot-starter-data-jpa")
  implementation("org.springframework.boot:spring-boot-starter-websocket")

  implementation("com.fasterxml.jackson.module:jackson-module-kotlin")

  implementation("org.springdoc:springdoc-openapi-starter-webmvc-ui:2.0.2")

  implementation("org.jetbrains.kotlin:kotlin-reflect")
  implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

  implementation("io.projectreactor.kotlin:reactor-kotlin-extensions")
  implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor")


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
    jvmTarget = "17"
  }
}
val generateFsmViz by tasks.existing {
  doFirst {
    layout.projectDirectory.dir("generated").asFile.mkdirs()
  }
}
val assemble by tasks.existing {
  dependsOn("generateFsmViz")
}

configure<io.jumpco.open.kfsm.gradle.VizPluginExtension> {
  fsm("TurnstileFSM") {
    outputFolder = layout.projectDirectory.dir("generated").asFile
    input = layout.projectDirectory.file("src/main/kotlin/com/example/kfsm/TurnstileFSM.kt").asFile
    isGeneratePlantUml = true // Required default is false
    isGenerateAsciidoc = true // Required default is false
    output = "turnstile"
  }
}

tasks.register<Copy>("unpackDist") {
  from(zipTree("../kfsm-hateoas-client/build/libs/kfsm-hateoas-client.zip"))
  val dir = layout.projectDirectory.dir("src/main/resources/static")
  into(dir)
  doLast {
    val html = File(dir.asFile, "index.html").readText()
    dir.asFile.listFiles().forEach { file ->
      if(!file.name.endsWith(".html") && !html.contains(file.name)) {
        project.logger.lifecycle("${this.name}:remove:${file}")
        file.delete()
      }
    }
  }
}

val processResources by tasks.existing {
  dependsOn("unpackDist")
}


graalvmNative {
  binaries {
    named("main") {
      buildArgs.add("--enable-url-protocols=jar")
    }
  }
}