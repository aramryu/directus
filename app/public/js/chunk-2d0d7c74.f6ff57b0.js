(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7c74"],{"77ec":function(e,n,t){"use strict";t.r(n),n["default"]="# Custom API Hooks <small></small>\n\n> Custom API Hooks allow running custom logic when a specified event occurs within your project. They can be registered\n> as either \"blocking\" or immediate.\n\n## 1. Create a Hook File\n\nCustom hooks are dynamically loaded from within your extensions folder. By default this directory is located at\n`/extensions`, but it can be configured within your project's env file to be located anywhere.\n\n### Default Standalone Hook Location\n\n```\n/extensions/hooks/<hook-id>/index.js\n```\n\n## 2. Define the Event\n\nNext, you will want to define your event. You can trigger your custom hook with any of the platform's many API events.\nSystem events are referenced with the format:\n\n```\n<scope>.<action>(.<before>)\n// eg: items.create\n// eg: files.create\n// eg: collections.*\n// eg: users.update.before\n```\n\n### Scope\n\nThe scope determines the API endpoint that is triggered. The `*` wildcard can also be used to include all scopes.\n\n::: tip System Scope\n\nCurrently all system tables are available as event scopes except for `directus_migrations` and `directus_sessions`,\nwhich don't have relevant endpoints or services.\n\n:::\n\n### Action\n\nDefines the triggering operation within the specified context (see chart below). The `*` wildcard can also be used to\ninclude all actions available to the scope.\n\n### Before\n\nMany scopes (see chart below) support an optional `.before` suffix for running a _blocking_ hook prior to the event\nbeing fired. This allows you to check and/or modify the event's payload before it is processed.\n\n- `items.create.before` (Blocking)\n- `items.create` (Non Blocking, also called 'after' implicitly)\n\nThis also allows you to cancel an event based on the logic within the hook. Below is an example of how you can cancel a\ncreate event by throwing a standard Directus exception.\n\n```js\nmodule.exports = function registerHook({ exceptions }) {\n\tconst { InvalidPayloadException } = exceptions;\n\n\treturn {\n\t\t'items.create.before': async function (input) {\n\t\t\tif (LOGIC_TO_CANCEL_EVENT) {\n\t\t\t\tthrow new InvalidPayloadException(WHAT_IS_WRONG);\n\t\t\t}\n\n\t\t\treturn input;\n\t\t},\n\t};\n};\n```\n\n### Event Format Options\n\n| Scope                | Actions                           | Before   |\n| -------------------- | --------------------------------- | -------- |\n| `server`             | `start` and `stop`                | Optional |\n| `init`               |                                   | Optional |\n| `routes.init`        | `before` and `after`              | No       |\n| `routes.custom.init` | `before` and `after`              | No       |\n| `middlewares.init`   | `before` and `after`              | No       |\n| `request`            | `not_found`                       | No       |\n| `response`           |                                   | No†      |\n| `error`              |                                   | No       |\n| `auth`               | `login`, `logout`† and `refresh`† | Optional |\n| `items`              | `create`, `update` and `delete`   | Optional |\n| `activity`           | `create`, `update` and `delete`   | Optional |\n| `collections`        | `create`, `update` and `delete`   | Optional |\n| `fields`             | `create`, `update` and `delete`   | Optional |\n| `files`              | `create`, `update` and `delete`   | Optional |\n| `folders`            | `create`, `update` and `delete`   | Optional |\n| `permissions`        | `create`, `update` and `delete`   | Optional |\n| `presets`            | `create`, `update` and `delete`   | Optional |\n| `relations`          | `create`, `update` and `delete`   | Optional |\n| `revisions`          | `create`, `update` and `delete`   | Optional |\n| `roles`              | `create`, `update` and `delete`   | Optional |\n| `settings`           | `create`, `update` and `delete`   | Optional |\n| `users`              | `create`, `update` and `delete`   | Optional |\n| `webhooks`           | `create`, `update` and `delete`   | Optional |\n\n† Feature Coming Soon\n\n## 3. Register your Hook\n\nEach custom hook is registered to its event scope using a function with the following format:\n\n```js\nmodule.exports = function registerHook() {\n\treturn {\n\t\t'items.create': function () {\n\t\t\taxios.post('http://example.com/webhook');\n\t\t},\n\t};\n};\n```\n\n## 4. Develop your Custom Hook\n\n### Register Function\n\nThe register function (eg: `module.exports = function registerHook()`) must return an object where the key is the event,\nand the value is the handler function itself.\n\nThe `registerHook` function receives a context parameter with the following properties:\n\n- `services` — All API internal services\n- `exceptions` — API exception objects that can be used for throwing \"proper\" errors\n- `database` — Knex instance that is connected to the current database\n- `env` — Parsed environment variables\n\n### Event Handler Function\n\nThe event handler function (eg: `'items.create': function()`) receives a context parameter with the following\nproperties:\n\n- `event` — Full event string\n- `accountability` — Information about the current user\n- `collection` — Collection that is being modified\n- `item` — Primary key(s) of the item(s) being modified\n- `action` — Action that is performed\n- `payload` — Payload of the request\n- `schema` - The current API schema in use\n\n#### Auth\n\nThe `auth` hooks have the following context properties:\n\n- `event` — Full event string\n- `accountability` — Information about the current user\n- `action` — Action that is performed\n- `payload` — Payload of the request\n- `schema` - The current API schema in use\n- `status` - One of `pending`, `success`, `fail`\n- `user` - ID of the user that tried logging in/has logged in\n\n## 5. Restart the API\n\nTo deploy your hook, simply restart the API by running:\n\n```bash\nnpx directus start\n```\n\n## Full Example:\n\n```js\n// extensions/hooks/sync-with-external/index.js\n\nmodule.exports = function registerHook({ services, exceptions }) {\n\tconst { ServiceUnavailableException, ForbiddenException } = exceptions;\n\n\treturn {\n\t\t// Force everything to be admin-only at all times\n\t\t'items.*': async function ({ item, accountability }) {\n\t\t\tif (accountability.admin !== true) throw new ForbiddenException();\n\t\t},\n\t\t// Sync with external recipes service, cancel creation on failure\n\t\t'items.create.before': async function (input, { collection }) {\n\t\t\tif (collection !== 'recipes') return input;\n\n\t\t\ttry {\n\t\t\t\tawait axios.post('https://example.com/recipes', input);\n\t\t\t} catch (error) {\n\t\t\t\tthrow new ServiceUnavailableException(error);\n\t\t\t}\n\n\t\t\tinput[0].syncedWithExample = true;\n\n\t\t\treturn input;\n\t\t},\n\t};\n};\n```\n"}}]);