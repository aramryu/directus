(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e93c"],{d5c8:function(n,e,t){"use strict";t.r(e),e["default"]='# Server Health\n\n> The `/server/health` endpoint shows you a general health status for the server and all connected (third party) services, such as Redis or S3.\n\nThe output is based on the "Health Check Response for HTTP APIs" draft spec:\n[Health Check Response Format for HTTP APIs Draft Specification](https://tools.ietf.org/id/draft-inadarei-api-health-check-05.html).\n\nThis endpoint can be used to ensure a healthy system when running in a horizontally scaled setup, like Kubernetes or AWS\nElastic Beanstalk.\n\nBy default, the endpoint only returns a `status` of `ok`, `warn` or `error`. By authenticating as an admin, it will return\nmore in-depth information about the current health status of the system.\n\n```json\n// Response\n\n// Non-admin\n{\n  "status": "ok"\n}\n\n// Admin\n{\n  "status": "ok",\n  "releaseId": "9.0.0",\n  "serviceId": "3292c816-ae02-43b4-ba91-f0bb549f040c",\n  "checks": {\n    "pg:responseTime": [\n      {\n        "status": "ok",\n        "componentType": "datastore",\n        "observedUnit": "ms",\n        "observedValue": 0.489\n      }\n    ],\n    "pg:connectionsAvailable": [\n      {\n        "status": "ok",\n        "componentType": "datastore",\n        "observedValue": 2\n      }\n    ],\n    "pg:connectionsUsed": [\n      {\n        "status": "ok",\n        "componentType": "datastore",\n        "observedValue": 0\n      }\n    ],\n    "storage:local:responseTime": [\n      {\n        "status": "ok",\n        "componentType": "objectstore",\n        "observedValue": 1.038,\n        "observedUnit": "ms"\n      }\n    ],\n    "email:connection": [\n      {\n        "status": "ok",\n        "componentType": "email"\n      }\n    ]\n  }\n}\n```\n'}}]);