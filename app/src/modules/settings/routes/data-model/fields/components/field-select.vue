<template>
	<div :class="(field.meta && field.meta.width) || 'full'">
		<d-input disabled v-if="disabled" class="field">
			<template #prepend>
				<d-icon name="lock" v-tooltip="$t('system_fields_locked')" />
			</template>

			<template #input>
				<div class="label">
					<span class="name">{{ field.field }}</span>
				</div>
			</template>
		</d-input>

		<div v-else-if="localType === 'translations'" class="group">
			<div class="header">
				<d-icon class="drag-handle" name="drag_indicator" />
				<span class="name" v-tooltip="field.name">{{ field.field }}</span>
				<div class="spacer" />
				<d-icon small name="group_work" v-tooltip="$t('fields_group')" />
				<d-menu show-arrow placement="bottom-end">
					<template #activator="{ toggle }">
						<span class="group-options" @click="toggle">
							<d-icon name="more_vert" />
						</span>
					</template>

					<d-list>
						<d-list-item :to="`/settings/data-model/${field.collection}/${field.field}`">
							<d-list-item-icon><d-icon name="edit" outline /></d-list-item-icon>
							<d-list-item-content>
								{{ $t('edit_field') }}
							</d-list-item-content>
						</d-list-item>

						<d-divider />

						<d-list-item @click="deleteActive = true" class="danger">
							<d-list-item-icon><d-icon name="delete" outline /></d-list-item-icon>
							<d-list-item-content>
								{{ $t('delete_field') }}
							</d-list-item-content>
						</d-list-item>
					</d-list>
				</d-menu>
			</div>

			<router-link :to="`/settings/data-model/${translationsCollection}`">
				<d-notice type="info" icon="translate">
					<div>{{ $tc('click_to_manage_translated_fields', translationsFieldsCount) }}</div>
					<div class="spacer" />
					<d-icon name="launch" />
				</d-notice>
			</router-link>
		</div>

		<d-input v-else class="field" :class="{ hidden }" readonly @click="openFieldDetail">
			<template #prepend>
				<d-icon class="drag-handle" name="drag_indicator" @click.stop />
			</template>

			<template #input>
				<div class="label">
					<span class="name" v-tooltip="field.name">
						{{ field.field }}
						<d-icon name="star" class="required" sup v-if="field.schema && field.schema.is_nullable === false" />
					</span>
					<span v-if="field.meta" class="interface">{{ interfaceName }}</span>
					<span v-else class="interface">{{ $t('db_only_click_to_configure') }}</span>
				</div>
			</template>

			<template #append>
				<div class="icons">
					<d-icon
						v-if="field.schema && field.schema.is_primary_key"
						name="vpn_key"
						small
						v-tooltip="$t('primary_key')"
					/>
					<d-icon
						v-if="!field.meta"
						name="report_problem"
						class="unmanaged"
						small
						v-tooltip="$t('db_only_click_to_configure')"
					/>
					<d-icon v-if="hidden" name="visibility_off" class="hidden-icon" v-tooltip="$t('hidden_field')" small />
					<d-menu show-arrow placement="bottom-end">
						<template #activator="{ toggle }">
							<d-icon @click.stop="toggle" name="more_vert" />
						</template>

						<d-list>
							<d-list-item :to="`/settings/data-model/${field.collection}/${field.field}`">
								<d-list-item-icon><d-icon name="edit" outline /></d-list-item-icon>
								<d-list-item-content>
									{{ $t('edit_field') }}
								</d-list-item-content>
							</d-list-item>

							<d-list-item v-if="duplicable" @click="duplicateActive = true">
								<d-list-item-icon>
									<d-icon name="content_copy" />
								</d-list-item-icon>
								<d-list-item-content>{{ $t('duplicate_field') }}</d-list-item-content>
							</d-list-item>

							<d-list-item @click="toggleVisibility">
								<template v-if="hidden === false">
									<d-list-item-icon><d-icon name="visibility_off" /></d-list-item-icon>
									<d-list-item-content>{{ $t('hide_field_on_detail') }}</d-list-item-content>
								</template>
								<template v-else>
									<d-list-item-icon><d-icon name="visibility" /></d-list-item-icon>
									<d-list-item-content>{{ $t('show_field_on_detail') }}</d-list-item-content>
								</template>
							</d-list-item>

							<d-divider />

							<d-list-item @click="setWidth('half')" :disabled="field.meta && field.meta.width === 'half'">
								<d-list-item-icon><d-icon name="border_vertical" /></d-list-item-icon>
								<d-list-item-content>{{ $t('half_width') }}</d-list-item-content>
							</d-list-item>

							<d-list-item @click="setWidth('full')" :disabled="field.meta && field.meta.width === 'full'">
								<d-list-item-icon><d-icon name="border_right" /></d-list-item-icon>
								<d-list-item-content>{{ $t('full_width') }}</d-list-item-content>
							</d-list-item>

							<d-list-item @click="setWidth('fill')" :disabled="field.meta && field.meta.width === 'fill'">
								<d-list-item-icon><d-icon name="aspect_ratio" /></d-list-item-icon>
								<d-list-item-content>{{ $t('fill_width') }}</d-list-item-content>
							</d-list-item>

							<d-divider />

							<d-list-item
								@click="deleteActive = true"
								class="danger"
								:disabled="(field.schema && field.schema.is_primary_key === true) || false"
							>
								<d-list-item-icon><d-icon name="delete" outline /></d-list-item-icon>
								<d-list-item-content>
									{{ $t('delete_field') }}
								</d-list-item-content>
							</d-list-item>
						</d-list>
					</d-menu>
				</div>
			</template>
		</d-input>

		<d-dialog v-model="duplicateActive" @esc="duplicateActive = false">
			<d-card class="duplicate">
				<d-card-title>{{ $t('duplicate_where_to') }}</d-card-title>
				<d-card-text>
					<div class="form-grid">
						<div class="field">
							<span class="type-label">{{ $tc('collection', 0) }}</span>
							<d-select class="monospace" :items="collections" v-model="duplicateTo" />
						</div>

						<div class="field">
							<span class="type-label">{{ $tc('field', 0) }}</span>
							<d-input class="monospace" v-model="duplicateName" db-safe autofocus />
						</div>
					</div>
				</d-card-text>
				<d-card-actions>
					<d-button secondary @click="duplicateActive = false">
						{{ $t('cancel') }}
					</d-button>
					<d-button @click="saveDuplicate" :disabled="duplicateName === null" :loading="duplicating">
						{{ $t('duplicate') }}
					</d-button>
				</d-card-actions>
			</d-card>
		</d-dialog>

		<d-dialog v-model="deleteActive" @esc="deleteActive = false">
			<d-card>
				<d-card-title>{{ $t('delete_field_are_you_sure', { field: field.field }) }}</d-card-title>
				<d-card-actions>
					<d-button @click="deleteActive = false" secondary>{{ $t('cancel') }}</d-button>
					<d-button :loading="deleting" @click="deleteField" class="delete">{{ $t('delete') }}</d-button>
				</d-card-actions>
			</d-card>
		</d-dialog>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from '@vue/composition-api';
import { Field, Relation } from '@/types';
import { useCollectionsStore, useFieldsStore, useRelationsStore } from '@/stores/';
import { getInterfaces } from '@/interfaces';
import router from '@/router';
import { i18n } from '@/lang';
import { cloneDeep } from 'lodash';
import { getLocalTypeForField } from '../../get-local-type';
import { notify } from '@/utils/notify';
import { unexpectedError } from '@/utils/unexpected-error';

export default defineComponent({
	props: {
		field: {
			type: Object as PropType<Field>,
			required: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		const relationsStore = useRelationsStore();
		const collectionsStore = useCollectionsStore();
		const fieldsStore = useFieldsStore();
		const interfaces = getInterfaces();

		const editActive = ref(false);

		const { deleteActive, deleting, deleteField } = useDeleteField();
		const {
			duplicateActive,
			duplicateName,
			collections,
			duplicateTo,
			saveDuplicate,
			duplicating,
			duplicable,
		} = useDuplicate();

		const interfaceName = computed(() => {
			return interfaces.value.find((inter) => inter.id === props.field.meta?.interface)?.name;
		});

		const hidden = computed(() => props.field.meta?.hidden === true);

		const localType = computed(() => getLocalTypeForField(props.field.collection, props.field.field));

		const { translationsCollection, translationsFieldsCount } = useTranslations();

		return {
			interfaceName,
			editActive,
			setWidth,
			deleteActive,
			deleting,
			deleteField,
			duplicateActive,
			collections,
			duplicateName,
			duplicateTo,
			saveDuplicate,
			duplicating,
			openFieldDetail,
			hidden,
			toggleVisibility,
			localType,
			translationsCollection,
			translationsFieldsCount,
			duplicable,
		};

		function setWidth(width: string) {
			fieldsStore.updateField(props.field.collection, props.field.field, { meta: { width } });
		}

		function toggleVisibility() {
			fieldsStore.updateField(props.field.collection, props.field.field, {
				meta: { hidden: !props.field.meta?.hidden },
			});
		}

		function useDeleteField() {
			const deleteActive = ref(false);
			const deleting = ref(false);

			return {
				deleteActive,
				deleting,
				deleteField,
			};

			async function deleteField() {
				await fieldsStore.deleteField(props.field.collection, props.field.field);
				deleting.value = false;
				deleteActive.value = false;
			}
		}

		function useDuplicate() {
			const duplicateActive = ref(false);
			const duplicateName = ref(props.field.field + '_copy');
			const duplicating = ref(false);
			const collections = computed(() =>
				collectionsStore.state.collections
					.map(({ collection }) => collection)
					.filter((collection) => collection.startsWith('directus_') === false)
			);
			const duplicateTo = ref(props.field.collection);

			const duplicable = computed(() => {
				return (
					['o2m', 'm2m', 'm2o', 'files', 'file', 'm2a'].includes(
						getLocalTypeForField(props.field.collection, props.field.field)
					) === false && props.field.schema?.is_primary_key === false
				);
			});

			return {
				duplicateActive,
				duplicateName,
				collections,
				duplicateTo,
				saveDuplicate,
				duplicating,
				duplicable,
			};

			async function saveDuplicate() {
				const newField: Record<string, any> = {
					...cloneDeep(props.field),
					field: duplicateName.value,
					collection: duplicateTo.value,
				};

				if (newField.meta) {
					delete newField.meta.id;
					delete newField.meta.sort;
				}

				if (newField.schema) {
					delete newField.schema.comment;
				}

				delete newField.name;

				duplicating.value = true;

				try {
					await fieldsStore.createField(duplicateTo.value, newField);

					notify({
						title: i18n.t('field_create_success', { field: newField.field }),
						type: 'success',
					});

					duplicateActive.value = false;
				} catch (err) {
					unexpectedError(err);
				} finally {
					duplicating.value = false;
				}
			}
		}

		async function openFieldDetail() {
			if (!props.field.meta) {
				await fieldsStore.updateField(props.field.collection, props.field.field, { meta: {} });
			}

			router.push(`/settings/data-model/${props.field.collection}/${props.field.field}`);
		}

		function useTranslations() {
			const translationsCollection = computed(() => {
				if (localType.value !== 'translations') return null;

				const relation = relationsStore.state.relations.find((relation: Relation) => {
					return relation.one_collection === props.field.collection && relation.one_field === props.field.field;
				});

				if (!relation) return null;

				return relation.many_collection;
			});

			const translationsFieldsCount = computed(() => {
				const fields = fieldsStore.getFieldsForCollection(translationsCollection.value);

				return fields.filter((field: Field) => field.meta?.hidden !== true).length;
			});

			return { translationsCollection, translationsFieldsCount };
		}
	},
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/breakpoint';
@import '@/styles/mixins/form-grid';

.full,
.fill {
	grid-column: 1 / span 2;
}

.v-input.hidden {
	--background-page: var(--background-subdued);
}

.v-input.monospace {
	--v-input-font-family: var(--family-monospace);
}

.v-select.monospace {
	--v-select-font-family: var(--family-monospace);
}

.v-icon {
	--v-icon-color: var(--foreground-subdued);
	--v-icon-color-hover: var(--foreground);

	&.hidden-icon {
		--v-icon-color-hover: var(--foreground-subdued);
	}

	&.unmanaged {
		--v-icon-color: var(--warning);
		--v-icon-color-hover: var(--warning);
	}
}

.drag-handle {
	cursor: grab !important;
}

.duplicate {
	.type-label {
		margin-bottom: 4px;
	}

	.duplicate-field + .duplicate-field {
		margin-bottom: 32px;
	}
}

.group {
	position: relative;
	padding: var(--input-padding);
	background-color: var(--card-face-color);
	border-radius: var(--border-radius);
	box-shadow: 0px 0px 6px 0px rgba(var(--card-shadow-color), 0.2);

	.header {
		display: flex;
		align-items: center;
		margin-bottom: var(--input-padding);
	}

	.name {
		font-family: var(--family-monospace);
	}

	.drag-handle {
		margin-right: 8px;
		transition: color var(--fast) var(--transition);

		&:hover {
			color: var(--foreground);
		}
	}

	.group-options {
		cursor: pointer;
	}

	.v-notice {
		cursor: pointer;
	}
}

.field {
	--input-height: 48px;
	--input-padding: 8px;

	::v-deep .input {
		border: none;
		background-color: var(--card-face-color);
		box-shadow: 0px 0px 6px 0px rgba(var(--card-shadow-color), 0.2);

		&:hover {
			background-color: var(--card-face-color);
		}
	}

	.label {
		flex-grow: 1;
		overflow: hidden;
		text-overflow: ellipsis;

		.name {
			font-family: var(--family-monospace);
		}

		.interface {
			font-family: var(--family-monospace);
			display: none;
			color: var(--foreground-subdued);
			opacity: 0;
			transition: opacity var(--fast) var(--transition);

			@include breakpoint(small) {
				display: initial;
			}
		}
	}

	&:hover {
		.label {
			.interface {
				opacity: 1;
			}
		}
	}
}

.v-list-item.danger {
	--v-list-item-color: var(--danger);
	--v-list-item-color-hover: var(--danger);
	--v-list-item-icon-color: var(--danger);
}

.icons {
	.v-icon + .v-icon:not(:last-child) {
		margin-left: 8px;
	}
}

.spacer {
	flex-grow: 1;
}

.form-grid {
	--form-vertical-gap: 24px;

	@include form-grid;
}

.delete {
	--v-button-background-color: var(--danger);
	--v-button-background-color-hover: var(--danger-125);
}

.required {
	position: relative;
	left: -8px;
	color: var(--primary);
}
</style>
