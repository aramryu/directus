<template>
	<d-item-group class="v-tabs-items" :value="value" @input="update">
		<slot />
	</d-item-group>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

export default defineComponent({
	props: {
		value: {
			type: Array as PropType<(string | number)[]>,
			default: undefined,
		},
	},
	setup(props, { emit }) {
		function update(newSelection: readonly (string | number)[]) {
			emit('input', newSelection);
		}

		return { update };
	},
});
</script>
