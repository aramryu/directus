<template>
	<d-divider
		:class="{ margin: icon || title, 'extra-margin': marginTop }"
		:style="{
			'--v-divider-color': color,
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
		marginTop: {
			type: Boolean,
			default: false,
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
	margin-top: 12px;
}
.extra-margin {
	margin-top: 40px;
}
</style>
