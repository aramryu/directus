<template>
	<d-divider v-if="section.divider" />
	<d-list-group :scope="scope" v-else-if="section.children" :dense="dense" :multiple="false" :value="section.to">
		<template #activator>
			<d-list-item-icon v-if="section.icon !== undefined"><d-icon :name="section.icon" /></d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="section.name" />
			</d-list-item-content>
		</template>

		<d-item-group :scope="section.to">
			<navigation-list-item
				v-for="(child, index) in section.children"
				:key="index"
				:section="child"
				dense
				:scope="section.to"
			/>
		</d-item-group>
	</d-list-group>

	<d-list-item v-else :to="`/docs${section.to}`" :dense="dense" :value="section.to">
		<d-list-item-icon v-if="section.icon !== undefined"><d-icon :name="section.icon" /></d-list-item-icon>
		<d-list-item-content>
			<d-text-overflow :text="section.name" />
		</d-list-item-content>
	</d-list-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Link, Group } from '@directus/docs';

export default defineComponent({
	name: 'navigation-list-item',
	props: {
		section: {
			type: Object as PropType<Link | Group>,
			default: null,
		},
		dense: {
			type: Boolean,
			default: false,
		},
		scope: {
			type: String,
			default: null,
		},
	},
});
</script>
