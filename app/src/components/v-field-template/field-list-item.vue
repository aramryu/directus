<template>
	<d-list-item
		v-if="field.children === undefined"
		:disabled="field.disabled"
		@click="$emit('add', `${parent ? parent + '.' : ''}${field.field}`)"
	>
		<d-list-item-content>{{ field.name || formatTitle(field.field) }}</d-list-item-content>
	</d-list-item>
	<d-list-group v-else>
		<template #activator>{{ field.name || formatTitle(field.field) }}</template>
		<field-list-item
			v-for="childField in field.children"
			:key="childField.key"
			:parent="`${parent ? parent + '.' : ''}${field.field}`"
			:field="childField"
			:depth="depth - 1"
			@add="$emit('add', $event)"
		/>
	</d-list-group>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { FieldTree } from './types';
import formatTitle from '@directus/format-title';

export default defineComponent({
	name: 'field-list-item',
	props: {
		field: {
			type: Object as PropType<FieldTree>,
			required: true,
		},
		parent: {
			type: String,
			default: null,
		},
		depth: {
			type: Number,
			default: 2,
		},
	},
	setup() {
		return { formatTitle };
	},
});
</script>
