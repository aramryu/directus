<template>
	<d-menu
		:disabled="disabled"
		class="v-select"
		:attached="inline === false"
		:show-arrow="inline === true"
		:close-on-content-click="closeOnContentClick"
	>
		<template #activator="{ toggle, active }">
			<div v-if="inline" class="inline-display" :class="{ placeholder: !displayValue }" @click="toggle">
				<fa icon="chevron-down" pull="left" />
				{{ displayValue || placeholder }}

			</div>
			<d-input
				v-else
				:full-width="fullWidth"
				readonly
				:value="displayValue"
				@click="toggle"
				:placeholder="placeholder"
				:disabled="disabled"
				:active="active"
			>
				<template #prepend><slot name="prepend" /></template>
				<template #append><fa icon="chevron-down" :class="{ active }" /></template>
			</d-input>
		</template>

		<d-list class="list">
			<template v-if="showDeselect">
				<d-list-item @click="$emit('input', null)" :disabled="value === null">
					<d-list-item-icon v-if="multiple === true">
						<d-icon fa="times" />
					</d-list-item-icon>
					<d-list-item-content>
						{{ multiple ? $t('deselect_all') : $t('deselect') }}
					</d-list-item-content>
					<d-list-item-icon v-if="multiple === false">
						<d-icon fa="times" />
					</d-list-item-icon>
				</d-list-item>
				<d-divider />
			</template>

			<template v-for="(item, index) in _items">
				<d-divider :key="index" v-if="item.divider === true" />

				<d-list-item
					v-else
					:key="item.text + item.value"
					:active="multiple ? (value || []).includes(item.value) : value === item.value"
					:disabled="item.disabled"
					@click="multiple ? null : $emit('input', item.value)"
				>
					<d-list-item-icon v-if="multiple === false && allowOther === false && itemIcon !== null && item.icon">
						<d-icon :name="item.icon" />
					</d-list-item-icon>
					<d-list-item-content>
						<span v-if="multiple === false" class="item-text">{{ item.text }}</span>
						<d-checkbox
							v-else
							:inputValue="value || []"
							:label="item.text"
							:value="item.value"
							@change="$emit('input', $event.length > 0 ? $event : null)"
						/>
					</d-list-item-content>
				</d-list-item>
			</template>

			<d-list-item v-if="allowOther && multiple === false" :active="usesOtherValue" @click.stop>
				<d-list-item-content>
					<input
						class="other-input"
						@focus="otherValue ? $emit('input', otherValue) : null"
						v-model="otherValue"
						:placeholder="$t('other')"
					/>
				</d-list-item-content>
			</d-list-item>

			<template v-if="allowOther && multiple === true">
				<d-list-item
					v-for="otherValue in otherValues"
					:key="otherValue.key"
					:active="(value || []).includes(otherValue.value)"
					@click.stop
				>
					<d-list-item-icon>
						<d-checkbox
							:inputValue="value || []"
							:value="otherValue.value"
							@change="$emit('input', $event.length > 0 ? $event : null)"
						/>
					</d-list-item-icon>
					<d-list-item-content>
						<input
							class="other-input"
							:value="otherValue.value"
							:placeholder="$t('other')"
							v-focus
							@input="setOtherValue(otherValue.key, $event.target.value)"
							@blur="otherValue.value.length === 0 && setOtherValue(otherValue.key, null)"
						/>
					</d-list-item-content>
					<d-list-item-icon>
						<d-icon fa="times" @click="setOtherValue(otherValue.key, null)" />
					</d-list-item-icon>
				</d-list-item>

				<d-list-item @click.stop="addOtherValue()">
					<d-list-item-icon><d-icon fa="plus" /></d-list-item-icon>
					<d-list-item-content>{{ $t('other') }}</d-list-item-content>
				</d-list-item>
			</template>
		</d-list>
	</d-menu>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, toRefs, Ref } from '@vue/composition-api';
import i18n from '@/lang';
import { useCustomSelection, useCustomSelectionMultiple } from '@/composables/use-custom-selection';

type ItemsRaw = (string | any)[];
type InputValue = string[] | string;

export default defineComponent({
	props: {
		items: {
			type: Array as PropType<ItemsRaw>,
			required: true,
		},
		itemText: {
			type: String,
			default: 'text',
		},
		itemValue: {
			type: String,
			default: 'value',
		},
		itemIcon: {
			type: String,
			default: null,
		},
		value: {
			type: [Array, String, Number, Boolean] as PropType<InputValue>,
			default: null,
		},
		multiple: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: null,
		},
		fullWidth: {
			type: Boolean,
			default: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		showDeselect: {
			type: Boolean,
			default: false,
		},
		allowOther: {
			type: Boolean,
			default: false,
		},
		closeOnContentClick: {
			type: Boolean,
			default: true,
		},
		inline: {
			type: Boolean,
			default: false,
		},
		multiplePreviewThreshold: {
			type: Number,
			default: 3,
		},
	},
	setup(props, { emit }) {
		const { _items } = useItems();
		const { displayValue } = useDisplayValue();
		const { value } = toRefs(props);
		const { otherValue, usesOtherValue } = useCustomSelection(value as Ref<string>, _items, emit);
		const { otherValues, addOtherValue, setOtherValue } = useCustomSelectionMultiple(
			value as Ref<string[]>,
			_items,
			emit
		);

		return {
			_items,
			displayValue,
			otherValue,
			usesOtherValue,
			otherValues,
			addOtherValue,
			setOtherValue,
		};

		function useItems() {
			const _items = computed(() => {
				const items = props.items.map((item) => {
					if (typeof item === 'string') {
						return {
							text: item,
							value: item,
						};
					}

					if (item.divider === true) return { divider: true };

					return {
						text: item[props.itemText],
						value: item[props.itemValue],
						icon: item[props.itemIcon],
						disabled: item.disabled,
					};
				});

				return items;
			});

			return { _items };
		}

		function useDisplayValue() {
			const displayValue = computed(() => {
				if (Array.isArray(props.value)) {
					if (props.value.length < props.multiplePreviewThreshold) {
						return props.value
							.map((value) => {
								return getTextForValue(value) || value;
							})
							.join(', ');
					} else {
						const itemCount = _items.value.length + otherValues.value.length;
						const selectionCount = props.value.length;

						if (itemCount === selectionCount) {
							return i18n.t('all_items');
						} else {
							return i18n.tc('item_count', selectionCount);
						}
					}
				}

				return getTextForValue(props.value) || props.value;
			});

			return { displayValue };

			function getTextForValue(value: string | number) {
				return _items.value.find((item) => item.value === value)?.['text'];
			}
		}
	},
});
</script>

<style>
body {
	--v-select-font-family: var(--family-sans-serif);
}
</style>

<style lang="scss" scoped>
.list {
	--v-list-min-width: 0;
}

.item-text {
	font-family: var(--v-select-font-family);
}

.v-input {
	--v-input-font-family: var(--v-select-font-family);

	cursor: pointer;

	.v-icon {
		transition: transform var(--medium) var(--transition-out);

		&.active {
			transform: scaleY(-1);
			transition-timing-function: var(--transition-in);
		}
	}

	::v-deep input {
		cursor: pointer;
	}
}

.other-input {
	margin: 0;
	padding: 0;
	line-height: 1.2;
	background-color: transparent;
	border: none;
	border-radius: 0;
}

.inline-display {
	width: max-content;
	padding-right: 18px;
	cursor: pointer;

	.v-icon {
		position: absolute;
	}

	&.placeholder {
		color: var(--foreground-subdued);
	}
}
</style>
