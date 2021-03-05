<template>
	<d-dialog :active="active" @toggle="$listeners.toggle" persistent @esc="cancel">
		<template #activator="slotBinding">
			<slot name="activator" v-bind="slotBinding" />
		</template>

		<d-card>
			<d-card-title>{{ $t('edit_bookmark') }}</d-card-title>

			<d-card-text>
				<d-input
					autofocus
					@keyup.enter="$emit('save', bookmarkName)"
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
import { defineComponent, ref, watch } from '@vue/composition-api';

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
		name: {
			type: String,
			required: true,
		},
	},
	setup(props, { emit }) {
		const bookmarkName = ref(props.name);

		watch(
			() => props.name,
			(newName: string) => (bookmarkName.value = newName)
		);

		return { bookmarkName, cancel };

		function cancel() {
			emit('toggle', false);
		}
	},
});
</script>
