<template>
	<d-dialog :active="active" @toggle="$listeners.toggle" persistent @esc="cancel">
		<template #activator="slotBinding">
			<slot name="activator" v-bind="slotBinding" />
		</template>

		<d-card>
			<d-card-title>{{ $t('create_bookmark') }}</d-card-title>

			<d-card-text>
				<d-input
					@keyup.enter="$emit('save', bookmarkName)"
					autofocus
					v-model="bookmarkName"
					:placeholder="$t('bookmark_name')"
				/>
			</d-card-text>

			<d-card-actions>
				<d-button @click="cancel" secondary>
					{{ $t('cancel') }}
				</d-button>
				<d-button
				:disabled="bookmarkName === null || bookmarkName.length === 0"
					@click="$emit('save', bookmarkName)"
					:loading="saving"
				>
					{{ $t('save') }}
				</d-button>
			</d-card-actions>
		</d-card>
	</d-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

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
		saving: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, { emit }) {
		const bookmarkName = ref(null);

		return { bookmarkName, cancel };

		function cancel() {
			bookmarkName.value = null;
			emit('toggle', false);
		}
	},
});
</script>
