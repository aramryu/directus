<template>
	<d-input
		type="number"
		:class="font"
		:value="value"
		:placeholder="placeholder"
		:disabled="disabled"
		:min="min"
		:max="max"
		:step="step"
		@input="$listeners.input"
	>
		<template v-if="iconLeft" #prepend>
			<d-icon :name="iconLeft" />
		</template>
		<template v-if="iconRight" #append>
			<d-icon :name="iconRight" />
		</template>
	</d-input>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

export default defineComponent({
	props: {
		value: {
			type: Number,
			default: null,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		min: {
			type: Number,
			default: null,
		},
		max: {
			type: Number,
			default: null,
		},
		iconLeft: {
			type: String,
			default: null,
		},
		iconRight: {
			type: String,
			default: null,
		},
		step: {
			type: Number,
			default: 1,
		},
		placeholder: {
			type: String,
			default: null,
		},
		font: {
			type: String as PropType<'sans-serif' | 'serif' | 'monospace'>,
			default: 'sans-serif',
		},
	},
});
</script>

<style lang="scss" scoped>
.v-input {
	&.monospace {
		--v-input-font-family: var(--family-monospace);
	}

	&.serif {
		--v-input-font-family: var(--family-serif);
	}

	&.sans-serif {
		--v-input-font-family: var(--family-sans-serif);
	}
}
</style>
