<template>
	<d-dialog :active="true" @toggle="close" @esc="close">
		<d-card>
			<d-card-title>{{ $t('add_file') }}</d-card-title>
			<d-card-text>
				<d-upload :preset="preset" multiple @input="close" from-url />
			</d-card-text>
			<d-card-actions>
				<d-button secondary @click="close">{{ $t('done') }}</d-button>
			</d-card-actions>
		</d-card>
	</d-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import router from '@/router';

export default defineComponent({
	props: {
		preset: {
			type: Object,
			default: () => ({}),
		},
	},
	setup(props) {
		return { close };

		function close() {
			router.push({ path: '/files', query: props.preset });
		}
	},
});
</script>
