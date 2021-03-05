<template>
	<d-list>
		<d-list-item v-if="defaultValue === null || !isRequired" :disabled="value === null" @click="$emit('input', null)">
			<d-list-item-icon><d-icon fa="times" /></d-list-item-icon>
			<d-list-item-content>{{ $t('clear_value') }}</d-list-item-content>
		</d-list-item>
		<d-list-item v-if="defaultValue !== null" :disabled="value === defaultValue" @click="$emit('input', defaultValue)">
			<d-list-item-icon>
				<d-icon fa="restore" />
			</d-list-item-icon>
			<d-list-item-content>{{ $t('reset_to_default') }}</d-list-item-content>
		</d-list-item>
		<d-list-item
			v-if="initialValue"
			:disabled="initialValue === undefined || value === initialValue"
			@click="$emit('unset', field)"
		>
			<d-list-item-icon>
				<d-icon fa="history" />
			</d-list-item-icon>
			<d-list-item-content>{{ $t('undo_changes') }}</d-list-item-content>
		</d-list-item>
		<d-list-item @click="$emit('edit-raw')">
			<d-list-item-icon><d-icon fa="code" /></d-list-item-icon>
			<d-list-item-content>{{ $t('raw_value') }}</d-list-item-content>
		</d-list-item>
	</d-list>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref } from '@vue/composition-api';
import { Field } from '@/types';

export default defineComponent({
	props: {
		field: {
			type: Object as PropType<Field>,
			required: true,
		},
		value: {
			type: [String, Number, Object, Array, Boolean],
			default: null,
		},
		initialValue: {
			type: [String, Number, Object, Array, Boolean],
			default: null,
		},
	},
	setup(props) {
		const defaultValue = computed(() => {
			const savedValue = props.field?.schema?.default_value;
			return savedValue !== undefined ? savedValue : null;
		});

		const isRequired = computed(() => {
			return props.field?.schema?.is_nullable === false;
		});

		return { defaultValue, isRequired };
	},
});
</script>
