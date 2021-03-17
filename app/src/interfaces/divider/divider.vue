<template>
	<d-divider
		:class="{ margin: icon || title, 'extra-margin': marginTop }"
		:style="{
			'--v-divider-label-color': color,
		}"
		large
		:inline-title="inlineTitle"
	>
		<template v-if="icon" #icon><d-icon :name="icon" /></template>
		<template v-if="title" #default>{{ title }}</template>
	</d-divider>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
	props: {
		color: {
			type: String,
			default: null,
		},
		icon: {
			type: String,
			default: null,
		},
		title: {
			type: String,
			default: null,
		},
		inlineTitle: {
			type: Boolean,
			default: false,
		},
	},
});
</script>

<style lang="scss" scoped>
.margin {
	margin-top: 20px;
	margin-bottom: -10px;
}
</style>
