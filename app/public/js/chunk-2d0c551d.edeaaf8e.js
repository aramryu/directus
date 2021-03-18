(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c551d"],{"3f1e":function(e,t,s){"use strict";s.r(t),t["default"]="# Styles\n\n> **Form Follows Function** is the guiding design principle of Directus. The minimal UI allows the platform to be easily tailored to your brand. [Learn more about the App](/concepts/application/).\n\n## App Themes\n\nThe Directus App has been developed with customization and extensibility in mind. Colors and styles referenced within the codebase all use CSS variables, and therefore it is easy to make comprehensive changes to the App styling.\n\nThere are two themes included by default: Light and Dark. You can duplicate these files to create your own themes — with no limit to customization. Below are several code resources for key SCSS files.\n\n- **Themes** — See the [Light Theme](https://github.com/directus/directus/blob/main/app/src/styles/themes/_light.scss)\n  or [Dark Theme](https://github.com/directus/directus/blob/main/app/src/styles/themes/_dark.scss)\n- **Typography** — See the [Fonts](https://github.com/directus/directus/blob/main/app/src/styles/_type-styles.scss) and\n  [Type Styles](https://github.com/directus/directus/blob/main/app/src/styles/mixins/type-styles.scss)\n- **Variables** — See the\n  [Global Variables](https://github.com/directus/directus/blob/main/app/src/styles/_variables.scss)\n\n## Project Styling\n\nSee [Adjusting Project Settings](/guides/projects/#adjusting-project-settings)\n\n## Custom CSS\n\nYou can also override any core CSS directly within the App through Project Settings. This makes it easy to edit the CSS variables listed in the themes above.\n\n1. Navigate to **Settings > Project Settings**\n2. Scroll to the **CSS Overrides** field\n3. Enter any **valid CSS**\n4. Click the **Save** action button in the header\n\n### Example\n\nSince App styles are inserted/removed whenever a component is rendered, you'll need to be aware of CSS priority. Using `:root` or `body` likely isn't scoped enough, you'll need to define a more specific scope, such as `#app`, or use `!important`.\n\n```css\n#app {\n  --family-sans-serif: 'Comic Sans MS';\n}\n```\n\n::: warning Action Styling\n\nThe `--primary` variable (and its shades) control call-to-actions and all other elements within the App using the \"Directus Blue\". While it may be tempting to override this variable with your brand's color, please first review the following warnings:\n\n- Avoid using yellow, orange, or red hues that give a sense of \"danger\"\n- Avoid low-contrast colors like yellows, grays, etc, that might not be easily visible\n- Avoid low-saturation colors like black, which might not properly highlight CTAs\n\n:::\n"}}]);