# KFSM Turnstile Sample for Spring HATEOAS

A simple application to demonstrate implementing [KFSM](https://github.com/open-jumpco/kfsm) with the classic Turnstile FSM.

```bash
./gradlew bootRun
```
## Operation

The FSM definition uses an immutable representation of the state instead of a variable.
The domain entity `TurnstileInfo` is a representation of the state of the Turnstile.
The domain entity is passed as a parameter and return from each action.

When designing a FSM careful consideration of how the state is externalised is important.
It is advisable that the type used to represent the state in the definition also be the type persisted by the domain entity or at least
 providing a consistent bi-directional conversion.

In the Turnstile example we are only concerned with 2 states so a `Boolean` is an acceptible standin.

The server creates 5 turnstiles that can be operated independently.

### Start
```bash
http http://localhost:8080/
```
Should return:
```json
{
    "_embedded": {
        "turnstileInfoList": [
            {
                "_links": {
                    "coin": {
                        "href": "http://localhost:8080/1/coin"
                    },
                    "self": {
                        "href": "http://localhost:8080/1"
                    }
                },
                "alarm": false,
                "id": 1,
                "locked": true,
                "message": ""
            },
            {
                "_links": {
                    "coin": {
                        "href": "http://localhost:8080/2/coin"
                    },
                    "self": {
                        "href": "http://localhost:8080/2"
                    }
                },
                "alarm": false,
                "id": 2,
                "locked": true,
                "message": ""
            },
            {
                "_links": {
                    "coin": {
                        "href": "http://localhost:8080/3/coin"
                    },
                    "self": {
                        "href": "http://localhost:8080/3"
                    }
                },
                "alarm": false,
                "id": 3,
                "locked": true,
                "message": ""
            },
            {
                "_links": {
                    "coin": {
                        "href": "http://localhost:8080/4/coin"
                    },
                    "self": {
                        "href": "http://localhost:8080/4"
                    }
                },
                "alarm": false,
                "id": 4,
                "locked": true,
                "message": ""
            },
            {
                "_links": {
                    "coin": {
                        "href": "http://localhost:8080/5/coin"
                    },
                    "self": {
                        "href": "http://localhost:8080/5"
                    }
                },
                "alarm": false,
                "id": 5,
                "locked": true,
                "message": ""
            }
        ]
    },
    "_links": {
        "self": {
            "href": "http://localhost:8080/"
        }
    }
}
```
### Check
```bash
http http://localhost:8080/1
```
Returns:
```json
{
    "_links": {
        "coin": {
            "href": "http://localhost:8080/1/coin"
        },
        "self": {
            "href": "http://localhost:8080/1"
        }
    },
    "alarm": false,
    "id": 1,
    "locked": true,
    "message": ""
}
```
### Coin
```bash
http POST http://localhost:8080/1/coin
```
Should return:
```json
{
    "_links": {
        "coin": {
            "href": "http://localhost:8080/1/coin"
        },
        "pass": {
            "href": "http://localhost:8080/1/pass"
        },
        "self": {
            "href": "http://localhost:8080/1"
        }
    },
    "alarm": false,
    "id": 1,
    "locked": false,
    "message": ""
}
```

### Pass
```bash
http POST http://localhost:8080/1/pass
```
Should return:
```json
{
    "_links": {
        "coin": {
            "href": "http://localhost:8080/1/coin"
        },
        "self": {
            "href": "http://localhost:8080/1"
        }
    },
    "alarm": false,
    "id": 1,
    "locked": true,
    "message": ""
}
```

### Invalid transition
```bash
http POST http://localhost:8080/1/pass
```
It will also be possible to produce an exception resulting in a specific response code in the case of invalid transitions.

```json
{
    "_links": {
        "coin": {
            "href": "http://localhost:8080/1/coin"
        },
        "self": {
            "href": "http://localhost:8080/1"
        }
    },
    "alarm": true,
    "id": 1,
    "locked": true,
    "message": "Alarm"
}
```

### Coin when unlocked
```bash
http POST http://localhost:8080/1/coin 
```
Should return:
```json
{
    "_links": {
        "coin": {
            "href": "http://localhost:8080/1/coin"
        },
        "pass": {
            "href": "http://localhost:8080/1/pass"
        },
        "self": {
            "href": "http://localhost:8080/1"
        }
    },
    "alarm": false,
    "id": 1,
    "locked": false,
    "message": "Return Coin"
}
```
