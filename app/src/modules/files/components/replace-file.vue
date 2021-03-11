<template>
	<d-dialog :active="active" @toggle="$emit('toggle', false)" @esc="$emit('toggle', false)">
		<v-card v-if="file">
			<d-card-title>{{ $t('replace_file') }}</d-card-title>
			<d-card-text>
				<d-upload :preset="preset" :file-id="file.id" @input="uploaded" from-url />
			</d-card-text>
			<d-card-actions>
				<d-button secondary @click="$emit('toggle', false)">{{ $t('done') }}</d-button>
			</d-card-actions>
		</v-card>
	</d-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import api from '@/api';
import router from '@/router';
import { PropType } from 'vue';

export default defineComponent({
	model: {
		prop: 'active',
		event: 'toggle',
	},
	props: {
		active: {
			type: Boolean,
			default: false,
		},
		file: {
			type: Object,
			default: () => ({}),
		},
		preset: {
			type: Object,
			default: () => ({}),
		},
	},
	setup(props, { emit }) {
		return { uploaded };
		function uploaded() {
			emit('toggle', false);
			emit('replaced');
		}
	},
});
</script>

<style lang="scss" scoped>
.add-new {
	--v-button-background-color: var(--primary-25);
	--v-button-color: var(--primary);
	--v-button-background-color-hover: var(--primary-50);
	--v-button-color-hover: var(--primary);
}
</style>
