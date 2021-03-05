<template>
	<div v-if="collection.collection.startsWith('directus_') === false">
		<d-menu placement="left-start" show-arrow>
			<template #activator="{ toggle }">
				<d-icon name="more_vert" @click="toggle" class="ctx-toggle" />
			</template>
			<d-list>
				<d-list-item @click="deleteActive = true" class="danger">
					<d-list-item-icon>
						<d-icon name="delete" outline />
					</d-list-item-icon>
					<d-list-item-content>
						{{ $t('delete_collection') }}
					</d-list-item-content>
				</d-list-item>
			</d-list>
		</d-menu>
		<d-dialog v-model="deleteActive" @esc="deleteActive = null">
			<d-card>
				<d-card-title>{{ $t('delete_collection_are_you_sure') }}</d-card-title>
				<d-card-actions>
					<d-button :disabled="deleting" secondary @click="deleteActive = null">
						{{ $t('cancel') }}
					</d-button>
					<d-button :loading="deleting" class="delete" @click="deleteCollection">
						{{ $t('delete_collection') }}
					</d-button>
				</d-card-actions>
			</d-card>
		</d-dialog>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api';
import { Collection } from '@/types';
import { useCollectionsStore } from '@/stores/';

export default defineComponent({
	props: {
		collection: {
			type: Object as PropType<Collection>,
			required: true,
		},
	},
	setup(props) {
		const collectionsStore = useCollectionsStore();
		const { deleting, deleteActive, deleteCollection } = useDelete();

		return { deleting, deleteActive, deleteCollection };

		function useDelete() {
			const deleting = ref(false);
			const deleteActive = ref(false);

			return { deleting, deleteActive, deleteCollection };

			async function deleteCollection() {
				deleting.value = true;

				try {
					await collectionsStore.deleteCollection(props.collection.collection);
					deleteActive.value = false;
				} finally {
					deleting.value = false;
				}
			}
		}
	},
});
</script>

<style lang="scss" scoped>
.v-button.delete {
	--v-button-background-color: var(--danger);
	--v-button-background-color-hover: var(--danger-125);
}

.ctx-toggle {
	--v-icon-color: var(--foreground-subdued);

	&:hover {
		--v-icon-color: var(--foreground-normal);
	}
}

.v-list-item.danger {
	--v-list-item-color: var(--danger);
	--v-list-item-color-hover: var(--danger);
	--v-list-item-icon-color: var(--danger);
}

.v-list-item.warning {
	--v-list-item-color: var(--warning);
	--v-list-item-color-hover: var(--warning);
	--v-list-item-icon-color: var(--warning);
}
</style>
