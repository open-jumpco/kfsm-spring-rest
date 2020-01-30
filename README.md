# KFSM Turnstile Sample for Spring HATEOAS

A simple application to demonstrate implementing [KFSM](https://github.com/open-jumpco/kfsm) with the classic Turnstile FSM.

```bash
./gradlew bootRun
```
## Sending Events

In a real world scenario the state will not be a parameter to requests because it will be maintained by the entity.

### Start
```bash
http http://localhost:8080/
```
Should return:
```json
{
    "_links": {
        "start": {
            "href": "http://localhost:8080/"
        },
        "coin": {
            "href": "http://localhost:8080/coin?locked=true"
        }
    },
    "locked": true,
    "message": "",
    "alarm": false
}
```

### Coin
```bash
http POST http://localhost:8080/coin locked=true
```
Should return:
```json
{
    "_links": {
        "start": {
            "href": "http://localhost:8080/"
        },
        "coin": {
            "href": "http://localhost:8080/coin?locked=false"
        },
        "pass": {
            "href": "http://localhost:8080/pass?locked=false"
        }
    },
    "locked": false,
    "message": "",
    "alarm": false
}
```

### Pass
```bash
http POST http://localhost:8080/pass locked=false
```
Should return:
```json
{
    "_links": {
        "start": {
            "href": "http://localhost:8080/"
        },
        "coin": {
            "href": "http://localhost:8080/coin?locked=true"
        }
    },
    "locked": true,
    "message": "",
    "alarm": false
}
```

### Invalid transition
```bash
http POST http://localhost:8080/pass locked=true
```

```json
{
    "_links": {
        "start": {
            "href": "http://localhost:8080/"
        },
        "coin": {
            "href": "http://localhost:8080/coin?locked=true"
        }
    },
    "locked": true,
    "message": "Alarm",
    "alarm": true
}
```

### Coin when unlocked
```bash
http POST http://localhost:8080/coin locked=false
```
Should return:
```json
{
    "_links": {
        "start": {
            "href": "http://localhost:8080/"
        },
        "coin": {
            "href": "http://localhost:8080/coin?locked=false"
        },
        "pass": {
            "href": "http://localhost:8080/pass?locked=false"
        }
    },
    "locked": false,
    "message": "Return Coin",
    "alarm": false
}
```
