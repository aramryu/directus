(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217908"],{c6ed:function(e,t,n){"use strict";n.r(t),t["default"]="# Authentication\n\n> By default, all data in the system is off limits for unauthenticated users. To gain access to protected data, you must include an access token with every request, or [configure permissions for the public role](/concepts/roles/#public-role).\n\n## Authenticating with Tokens\n\nIn order to authenticate to the API, you have to pass an authentication token. The token can be passed in two ways:\n\n### Query Parameter\n\nPass the token in the `access_token` query parameter: `?access_token=<token>`\n\n```\n?access_token=eyJh...KmUk\n```\n\n### Authorization Header\n\nPass the token in the Authorization header: `Authorization: Bearer <token>`\n\n```\nAuthorization: Bearer eyJh...KmUk\n```\n\n## Types of Tokens\n\nThere are two types of tokens that can be used to authenticate within Directus:\n\n### Temporary Token (JWT)\n\nThese are the tokens as returned by the [/auth/login](/reference/api/rest/authentication/#login) endpoint. These tokens\nhave a relatively short expiration time, and are thus the most secure option to use. The tokens are returned with a\n`refresh_token` that can be used to retrieve a new access token via the [/auth/refresh](/reference/api/rest/authentication/#refresh) endpoint.\n\n### Static Token\n\nEach user can have one static token that will never expire. This is useful for server-to-server communication, but is\nalso less secure than the JWT token. This token is saved to the database (`directus_users.token`) in plain-text and can be retrieved through the [/auth/login](/reference/api/rest/authentication/#login) endpoint.\n"}}]);