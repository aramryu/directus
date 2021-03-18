(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c13ba"],{"44bf":function(e,n,t){"use strict";t.r(n),n["default"]='# Hover\n\nAdds hover functionality to any component you place inside. Can be used to display different states of a component\ndepending if you are hovering over it.\n\n```html\n<v-hover v-slot="{ hover }">\n\t<v-button :color="hover ? red : blue" />\n</v-hover>\n```\n\n## Delays\n\nYou can control how long the hover state persists after the user leaves the element with the `close-delay` prop.\nLikewise, you can set how long it will take before the hover state is set with the `open-delay` prop:\n\n```html\n<v-hover v-slot="{ hover }" :open-delay="250" :close-delay="400">\n\t<v-button :class="hover ? red : blue" />\n</v-hover>\n<style>\n\t.v-button.red {\n\t\t--v-button-color: var(--red);\n\t}\n\t.v-button.blue {\n\t\t--v-button-color: var(--blue);\n\t}\n</style>\n```\n\n## Reference\n\n#### Props\n\n| Prop          | Description                                  | Default | Type      |\n| ------------- | -------------------------------------------- | ------- | --------- |\n| `close-delay` | Delay (ms) before the hover state is removed | `0`     | `Number`  |\n| `open-delay`  | Delay (ms) before the hover state is applied | `0`     | `Number`  |\n| `disabled`    | Disables the hover state from happening      | `false` | `Boolean` |\n| `tag`         | What HTML tag to use for the wrapper         | `\'div\'` | `String`  |\n\n#### Events\n\nn/a\n\n#### Slots\n\n| Slot      | Description                                                 | Data |\n| --------- | ----------------------------------------------------------- | ---- |\n| _default_ | Place your components that should use the hover effect here |      |\n'}}]);