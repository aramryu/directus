(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d65dc"],{"71f2":function(e,n,t){"use strict";t.r(n),n["default"]='---\npageClass: page-reference\n---\n\n# REST API\n\n<div class="two-up">\n<div class="left">\n\n> The Directus dynamic REST API includes a comprehensive set of endpoints that covers every feature of the platform.\n> Along with the GraphQL API, it is the primary way to interact with the content of your database.\n\n::: tip API Authentication\n\nTo access any of these REST API endpoints, you\'ll first need to [authenticate](/reference/api/authentication/) or\nrequest data that has been set to [public](/guides/permissions/#configuring-public-permissions).\n\n:::\n\n::: tip Items Endpoint\n\nChances are you\'re looking for how to interact with **Items**, the atomic content unit within Directus. If so, please\njump ahead to the [Items Endpoint](/reference/api/rest/items/) section of the API Reference.\n\n:::\n\n</div>\n<div class="right">\n\n- [Activity](/reference/api/rest/activity/)\n- [Authentication](/reference/api/rest/authentication/)\n- [Collections](/reference/api/rest/collections/)\n- [Extensions](/reference/api/rest/extensions/)\n- [Fields](/reference/api/rest/fields/)\n- [Files](/reference/api/rest/files/)\n- [Folders](/reference/api/rest/folders/)\n- [Items](/reference/api/rest/items/)\n- [Permissions](/reference/api/rest/permissions/)\n- [Presets](/reference/api/rest/presets/)\n- [Relations](/reference/api/rest/relations/)\n- [Revisions](/reference/api/rest/revisions/)\n- [Roles](/reference/api/rest/roles/)\n- [Server](/reference/api/rest/server/)\n- [Settings](/reference/api/rest/settings/)\n- [Users](/reference/api/rest/users/)\n- [Utilities](/reference/api/rest/utilities/)\n- [Webhooks](/reference/api/rest/webhooks/)\n\n</div>\n</div>\n\n---\n\n## Relational Data\n\n<div class="two-up">\n<div class="left">\n\n### Fetching\n\nBy default, Directus only retrieves the "root level" of an item. Relational data can be nested by using\n[the `fields` parameter](/reference/api/query/#fields).\n\nYou can use a wildcard (_) to fetch all items in a given level, use _.\\* to fetch everything on the next relational\nlevel, and so on, to any depth required.\n\n::: tip Performance & Size\n\nWhile the fields wildcard is very useful for debugging purposes, we recommend only requesting _specific_ fields for\nproduction use. By only requesting the fields you really need, you can drastically speed up the request, and reduce the\noverall output size.\n\n:::\n\n### Creating / Updating / Deleting\n\n##### Many-to-One\n\nMany-to-One relationships are fairly straightforward to manage relationally. You can simply submit the changes you want\nas an object under the relational key in your collection. For example, if you wanted to create a new featured article on\nyour page, you could submit:\n\n```json\nPATCH /items/pages/about\n\n{\n\t"featured_article": {\n\t\t"title": "This is my new article!"\n\t}\n}\n```\n\nThis will create a new record in the related collection, and save its primary key in the `featured_article` field for\nthis item. To update an existing item, simply provide the primary key with the updates, and Directus will treat it as an\nupdate instead of a creation:\n\n```json\nPATCH /items/pages/about\n\n{\n\t"featured_article": {\n\t\t"id": 15,\n\t\t"title": "This is an updated title for my article!"\n\t}\n}\n```\n\nSeeing that the Many-to-One relationship stores the foreign key on the field itself, removing the item can be done by\nnullifying the field:\n\n```json\nPATCH /items/pages/about\n\n{\n\t"featured_article": null\n}\n```\n\n##### One-to-Many (/ Many-to-Many / Many-to-Any)\n\nOne-to-Many, and therefore Many-to-Many and Many-to-Any, relationships can be updated in one of two ways:\n\n**Basic**\n\nThe API will return one-to-many fields as an array of nested keys or items (based on the `fields` parameter). You can\nuse this same structure to select what the related items are:\n\n```json\nPATCH /items/menu_items\n\n{\n\t"children": [2, 7, 149]\n}\n```\n\nYou can also provide an object instead of a primary key in order to create new items nested on the fly, or an object\nwith a primary key included to update an existing item:\n\n```json\nPATCH /items/menu_items\n\n{\n\t"children": [\n\t\t2, // assign existing item 2 to be a child of the current item\n\t\t{\n\t\t\t"name": "A new nested item"\n\t\t},\n\t\t{\n\t\t\t"id": 149,\n\t\t\t"name": "Assign and update existing item 149"\n\t\t}\n\t]\n}\n```\n\nTo remove items from this relationship, simply omit them from the array:\n\n```json\nPATCH /items/menu_items\n\n{\n\t"children": [2, 149]\n}\n```\n\nThis method of updating a one-to-many is very useful for smaller relational datasets.\n\n**"Detailed"**\n\nAlternatively, you can provide an object detailing the changes as follows:\n\n```json\nPATCH /items/menu_items\n\n{\n\t"children": {\n\t\t"create": [{ "name": "A new nested item" }],\n\t\t"update": [{ "id": 149, "name": "A new nested item" }],\n\t\t"delete": [7]\n\t}\n}\n```\n\nThis is useful if you need to have more tightly control on staged changes, or when you\'re working with a big relational\ndataset.\n\n::: warning Deleting Relational Data\n\nDirectus won\'t _delete_ relational data from the database. Instead, relational deletions will nullify the related\nforeign key. This means that your data will never suddenly disappear, but it also means that you might end up with\norphaned items.\n\n:::\n\n</div>\n<div class="right">\n\n```json\nGET /items/articles/1\n\n{\n\t"id": 1,\n\t"status": "published",\n\t"title": "Hello, world!",\n\t"body": "This is my first article",\n\t"author": "0bc7b36a-9ba9-4ce0-83f0-0a526f354e07"\n}\n```\n\n```json\nGET /items/articles/1?fields=*,author.first_name\n\n{\n\t"id": 1,\n\t"status": "published",\n\t"title": "Hello, world!",\n\t"body": "This is my first article",\n\t"author": {\n\t\t"first_name": "Rijk"\n\t}\n}\n```\n\n</div>\n</div>\n'}}]);