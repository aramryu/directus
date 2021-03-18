(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9932"],{"8db2":function(e,i,n){"use strict";n.r(i),i["default"]="# The Directus Application\n\n> The Directus App is the presentation layer for your data, content, and assets. It uses a left-to-right visual\n> hierarchy for organization and navigation. Below we cover the App's global elements and individual pages.\n\nThe Directus App is decoupled from, and powered by, the Directus API. It provides a way for both technical admins and\nnon-technical users to view and manage content of the connected database. It is written in [Vue.js](https://vuejs.org),\nis completely modular, and is highly customizable.\n\n## App Section Hierarchy\n\n![Application Overview](../assets/app-overview.svg)\n\n### 1. Module Bar\n\n- **Project Logo** — Displays your configured project logo and project color (defaults to the Directus logo and color).\n  If configured, clicking this component will navigate to the Project URL. During platform activity, an indeterminate\n  progress indicator will also be shown here.\n- **Module Navigation** — Allows navigating between the different modules your user has access to. Customizing the\n  Module Navigation is done within the [Role's configuration](/guides/roles/#configuring-a-role), but the default module\n  list includes:\n  - [Collections](#collections)\n  - [User Directory](#user-directory)\n  - [File Library](#file-library)\n  - [Documentation](#documentation)\n  - [Settings](#settings) (Admin Roles Only)\n  - [Any Custom Modules](/concepts/modules/) (Only if Configured)\n- **Current User Menu** — This component displays the authenticated user's name and avatar.\n  - Sign Out — Hovering over the User Menu exposes the button to log out of the platform.\n\n### 2. Navigation Bar\n\n- **Project Name** — Shows an icon and tooltip indicating the API's connection strength, and the name of your current\n  project, which can be configured under [Project Settings](/guides/projects/#adjusting-project-settings).\n- **Navigation** — This is a dynamic navigation based on your current module. Some modules also support\n  [Bookmark Presets](/guides/presets/#creating-a-preset), which are a customizable links to specific data-sets.\n\n### 3. Page\n\n- **Header** — A fixed section at the top of each page, the header includes:\n  - Page Icon — Clicking this navigates back to the previous page.\n  - Module Name — Clicking this navigates to the parent module/section.\n  - Page Title — Displays dynamic title of the current page.\n  - Action Buttons — Right-aligned contextual buttons for specific page actions.\n- **Page Content** — This displays the content of the page you navigated to.\n\n### 4. Page Sidebar\n\n- **Page Components** — Lists any contextual page components available. The \"Info\" component is available on every page,\n  explaining the page's general purpose and relevant details. Clicking any sidebar component will accordion it open. If\n  the App window is large enough, the sidebar will automatically open, and can be closed by clicking the \"X\" in the\n  top-right.\n- **Notifications Tray** — Fixed to the bottom of the page sidebar, this button opens a tray of recent user\n  notifications, and provides a link to the [Activity Log](#activity-log) page.\n\n## Collections\n\nThis module is the primary way for interacting with your database content. Here you can access your collections, browse\ntheir items, and navigate to individual item forms.\n\n### Collection Listing\n\nA page that lists the collections available to the current user. This is the landing page of the module, and effectively\nthe same as its navigation listing.\n\n### Collection Detail\n\nThis is the main gateway to your content items, providing a highly configurable Layout for browsing and visualizing the\nitems within a collection. The header of this page includes key action buttons for creating, deleting, and batch editing\nitems.\n\n- [Adjusting a Collection Layout](/guides/collections/#adjusting-a-collection-layout)\n- [Creating an Item](/guides/items/#creating-an-item)\n- [Updating an Item](/guides/items/#updating-an-item)\n- [Deleting an Item](/guides/items/#deleting-an-item)\n- [Archiving an Item](/guides/items/#archiving-an-item)\n- [Ordering Items](/guides/items/#ordering-items)\n- [Exporting Items](/guides/items/#exporting-items)\n- Browsing Items\n  - [Searching](/guides/items/#searching-items)\n  - [Filtering](/guides/items/#filtering-items)\n  - [Bookmarking](/guides/items/#bookmarking-item-presets)\n\n### Item Detail\n\nMost Collection Detail Layouts support navigating to individual item detail pages where you a presented with a\n[customizable form](/guides/fields#adjusting-field-arrangement) for viewing/editing the item's content. Like other\ndetail pages, there are many available features, including:\n\n- [Adjusting Field Arrangement](/guides/fields/#adjusting-field-arrangement)\n- [Updating an Item](/guides/items/#updating-an-item)\n- [Archiving an Item](/guides/items/#archiving-an-item)\n- [Reverting an Item](/guides/items/#reverting-an-item)\n- [Deleting an Item](/guides/items/#deleting-an-item)\n- [Commenting on an Item](/guides/items/#commenting-on-an-item)\n\n## User Directory\n\nThis module includes a comprehensive listing of all system users within your project. This page has the same features\nand configuration as [Collection Detail](#collection-detail).\n\n### User Detail\n\nSimilar to other [Item Detail](#item-detail) pages, this page provides a custom form for viewing system users. This is\nalso used for editing the \"Profile Page\" of the current user, which is accessible from the [User Menu](#_1-module-bar).\nThere are a number of [User Fields](/concepts/users/#user-fields) included out-of-the-box that can then be extended by\nfollowing the normal [Creating a Field](/guides/fields/#creating-a-field) guide.\n\n- [Creating a User](/guides/users/#creating-a-user)\n- [Inviting a User](/guides/users/#inviting-a-user)\n- [Configuring a User](/guides/users/#configuring-a-user)\n- [Archiving a User](/guides/users/#archiving-a-user)\n- [Deleting a User](/guides/users/#deleting-a-user)\n\n## File Library\n\nThis module aggregates all files within the project into one consolidated library. This page has the same features and\nconfiguration as [Collection Detail](#collection-detail).\n\n### File Detail\n\nSimilar to other [Item Detail](#item-detail) pages, this page provides a custom form for viewing assets and embeds.\nThere are a number of [File Fields](/concepts/files/#file-fields) included out-of-the-box that can then be extended by\nfollowing the normal [Creating a Field](/guides/fields/#creating-a-field) guide.\n\n- [Uploading a File](/guides/files/#uploading-a-file)\n- [Accessing an Original File](/guides/files/#downloading-an-original-file)\n- [Creating a Thumbnail Preset](/guides/files/#creating-a-thumbnail-preset)\n- [Requesting a Thumbnail](/guides/files/#requesting-a-thumbnail)\n\n## Documentation\n\nThis module is an internal set of guides, concepts, and reference docs for your project's specific version of Directus.\nIt also includes a dynamic [API Reference](/reference/api/introduction) that is dynamically tailored to your custom\nschema. The docs are organized into these distinct sections:\n\n- [Getting Started](/getting-started/introduction/) — Novice oriented, for a platform intro and installation.\n- [Concepts](/concepts/activity) — Learning oriented, for understanding the platform.\n- [Guides](/guides/api-config) — Problem oriented, follow along with steps while working.\n- [Reference](/reference/command-line-interface) — Information oriented, look up info and specs while working.\n- [API Reference](/reference/api/introduction/) — Information oriented, look up API resources while working.\n- [Contributing](/contributing/introduction/) — Contributor oriented — resources for working on Open-Source Core.\n\n::: tip Updating the Docs\n\nOur docs are written in markdown (with some additional VuePress styling like this hint box), and available for\nediting/fixing via [GitHub](https://github.com/directus/directus).\n\n:::\n\n::: tip Public Docs\n\nThe latest version of the Directus Docs are also available publicly. This online version includes additional sections,\nsuch as how to install the platform. [https://docs.directus.io](https://docs.directus.io)\n\n:::\n\n## Activity Log\n\nThis module provides a collective timeline of all actions taken within the project. This is a great way to audit user\nactivity or enforce accountability. This is the only system module that is not in the module bar by default — instead\nbeing located within the notifications tray of the page sidebar. This page has the same features and configuration as\n[Collection Detail](#collection-detail).\n\n### Activity Detail\n\nUnlike other item detail pages, activity items are **readonly** (for proper accountability) and open in a side drawer to\ndisplay the [Activity Fields](/concepts/activity/#activity-fields).\n\n## Settings\n\nThis module is only available to users within [Admin roles](/concepts/roles/#administrators-role). This is where your\nproject is configured, and the first place to go after installation. It includes the following sections:\n\n- [Project Settings](/guides/projects/#adjusting-project-settings)\n- [Data Model](/concepts/databases/#database-mirroring)\n- [Roles & Permissions](/concepts/roles)\n- [Presets & Bookmarks](/concepts/collections/#collection-presets-bookmarks)\n- [Webhooks](/guides/webhooks)\n"}}]);