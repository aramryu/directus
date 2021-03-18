(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9b83"],{"8f76":function(e,n,a){"use strict";a.r(n),n["default"]="# DigitalOcean App Platform\n\n## 1. Setup a repo on GitHub\n\nSee the doc on [installing Directus manually](/guides/installation/manual) to learn how to configure this repo.\n\n## 2. Sign up for a DigitalOcean account\n\nCreate your DigitalOcean account — [get $100 of free credit](https://m.do.co/c/4c0b6062c16e) by using our referral link.\n\n## 3. Create a Managed Database instance\n\nWe recommend using Postgres 12. The exact size and need for a replica depends on your usage and project requirements.\n\n## 4. Create a new App using your previously created repo\n\nMake sure to select the database you created in step 2 during the configuration wizard.\n\n## 5. Setup the build-step\n\nWhile Directus itself doesn't have to be built from source in order to use it on App Platform, we do recommend adding `npx directus bootstrap` as the \"build\" step for DigitalOcean. This will automatically provision the database if it's empty, and migrate it to the latest version in case of upgrades. See [Command Line Interface](/reference/command-line-interface/#bootstrap-a-project) for more information.\n\n## 6. Configure the environment variables\n\nSee [Environment Variables](/reference/environment-variables) for all available environment variables.\n\nDigitalOcean requires you to use SSL connections to managed databases. DigitalOcean provides a bunch of aliases to often\nused database properties that can be injected when the database is a component of your app. To enable SSL connections,\nset the following environment variables:\n\n```\nDB_SSL__REJECT_UNAUTHORIZED=true\nDB_SSL__CA=${my-database-component-name.CA_CERT}\n```\n\n::: warning\n\nMake sure to replace `my-database-component-name` with your actual database component name in the above env vars\n\n:::\n"}}]);