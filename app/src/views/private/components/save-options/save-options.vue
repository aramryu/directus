<template>
	<d-menu show-arrow :disabled="disabled">
		<template #activator="{ toggle }">
			<d-icon :class="{ disabled }" name="more_vert" @click="toggle" />
		</template>

		<d-list>
			<d-list-item :disabled="disabled" @click="$emit('save-and-stay')">
				<d-list-item-icon><d-icon name="check" /></d-list-item-icon>
				<d-list-item-content>{{ $t('save_and_stay') }}</d-list-item-content>
				<d-list-item-hint>{{ translateShortcut(['meta', 's']) }}</d-list-item-hint>
			</d-list-item>
			<d-list-item :disabled="disabled" @click="$emit('save-and-add-new')">
				<d-list-item-icon><d-icon name="add" /></d-list-item-icon>
				<d-list-item-content>{{ $t('save_and_create_new') }}</d-list-item-content>
				<d-list-item-hint>{{ translateShortcut(['meta', 'shift', 's']) }}</d-list-item-hint>
			</d-list-item>
			<d-list-item :disabled="disabled" @click="$emit('save-as-copy')">
				<d-list-item-icon><d-icon name="done_all" /></d-list-item-icon>
				<d-list-item-content>{{ $t('save_as_copy') }}</d-list-item-content>
			</d-list-item>
		</d-list>
	</d-menu>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import translateShortcut from '@/utils/translate-shortcut';

export default defineComponent({
	props: {
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	setup() {
		return { translateShortcut };
	},
});
</script>

<style lang="scss" scoped>
.v-icon {
	color: var(--foreground-subdued);

	&:hover:not(.disabled) {
		color: var(--foreground-normal);
	}

	&.disabled {
		cursor: not-allowed;
	}
}

.v-list-item {
	white-space: nowrap;
}
</style>
