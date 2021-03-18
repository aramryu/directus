<template>
	<private-view :title="$t('webhooks')">
		<template #headline>{{ $t('settings') }}</template>

		<template #title-outer:prepend>
			<d-button class="header-icon" rounded disabled icon secondary>
				<d-icon name="anchor" />
			</d-button>
		</template>

		<template #navigation>
			<settings-navigation />
		</template>

		<template #actions>
			<search-input v-model="searchQuery" />

			<d-dialog v-model="confirmDelete" v-if="selection.length > 0" @esc="confirmDelete = false">
				<template #activator="{ on }">
					<d-button rounded icon class="action-delete" @click="on">
						<d-icon name="delete" outline />
					</d-button>
				</template>

				<d-card>
					<d-card-title>{{ $tc('batch_delete_confirm', selection.length) }}</d-card-title>

					<d-card-actions>
						<d-button @click="confirmDelete = false" secondary>
							{{ $t('cancel') }}
						</d-button>
						<d-button @click="batchDelete" class="action-delete" :loading="deleting">
							{{ $t('delete') }}
						</d-button>
					</d-card-actions>
				</d-card>
			</d-dialog>

			<d-button
				rounded
				icon
				class="action-batch"
				v-if="selection.length > 1"
				:to="batchLink"
				v-tooltip.bottom="$t('edit')"
			>
				<d-icon name="edit" outline />
			</d-button>

			<d-button rounded icon :to="addNewLink" v-tooltip.bottom="$t('create_webhook')">
				<d-icon name="add" />
			</d-button>
		</template>

		<component
			class="layout"
			ref="layoutRef"
			:is="`layout-${layout}`"
			collection="directus_webhooks"
			:selection.sync="selection"
			:layout-options.sync="layoutOptions"
			:layout-query.sync="layoutQuery"
			:filters="filters"
			:search-query="searchQuery"
			@update:filters="filters = $event"
		>
			<template #no-results>
				<d-info :title="$t('no_results')" icon="search" center>
					{{ $t('no_results_copy') }}

					<template #append>
						<d-button @click="clearFilters">{{ $t('clear_filters') }}</d-button>
					</template>
				</d-info>
			</template>

			<template #no-items>
				<d-info :title="$tc('webhooks_count', 0)" icon="anchor" center type="info">
					{{ $t('no_webhooks_copy') }}

					<template #append>
						<d-button :to="{ path: '/settings/webhooks/+' }">{{ $t('create_webhook') }}</d-button>
					</template>
				</d-info>
			</template>
		</component>

		<template #sidebar>
			<sidebar-detail icon="info_outline" :title="$t('information')" close>
				<div class="page-description" v-html="marked($t('page_help_settings_webhooks_collection'))" />
			</sidebar-detail>
			<layout-sidebar-detail />
			<portal-target name="sidebar" />
		</template>
	</private-view>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api';
import SettingsNavigation from '../../components/navigation.vue';
import LayoutSidebarDetail from '@/views/private/components/layout-sidebar-detail';
import marked from 'marked';
import { LayoutComponent } from '@/layouts/types';
import { usePreset } from '@/composables/use-preset';
import api from '@/api';
import SearchInput from '@/views/private/components/search-input';

type Item = {
	[field: string]: any;
};

export default defineComponent({
	name: 'webhooks-collection',
	components: { SettingsNavigation, LayoutSidebarDetail, SearchInput },
	setup(props) {
		const layoutRef = ref<LayoutComponent | null>(null);

		const selection = ref<Item[]>([]);

		const { layout, layoutOptions, layoutQuery, filters, searchQuery } = usePreset(ref('directus_webhooks'));
		const { addNewLink, batchLink } = useLinks();
		const { confirmDelete, deleting, batchDelete } = useBatchDelete();

		return {
			addNewLink,
			batchDelete,
			batchLink,
			confirmDelete,
			deleting,
			filters,
			layoutRef,
			selection,
			layoutOptions,
			layoutQuery,
			layout,
			searchQuery,
			marked,
			clearFilters,
		};

		function useBatchDelete() {
			const confirmDelete = ref(false);
			const deleting = ref(false);

			return { confirmDelete, deleting, batchDelete };

			async function batchDelete() {
				deleting.value = true;

				confirmDelete.value = false;

				const batchPrimaryKeys = selection.value;

				await api.delete(`/webhooks/${batchPrimaryKeys}`);

				await layoutRef.value?.refresh();

				selection.value = [];
				deleting.value = false;
				confirmDelete.value = false;
			}
		}

		function useLinks() {
			const addNewLink = computed<string>(() => {
				return `/settings/webhooks/+`;
			});

			const batchLink = computed<string>(() => {
				const batchPrimaryKeys = selection.value;
				return `/settings/webhooks/${batchPrimaryKeys}`;
			});

			return { addNewLink, batchLink };
		}

		function clearFilters() {
			filters.value = [];
			searchQuery.value = null;
		}
	},
});
</script>

<style lang="scss" scoped>
.header-icon {
	--v-button-color-disabled: var(--warning);
	--v-button-background-color-disabled: var(--warning-10);
}

.action-delete {
	--v-button-background-color: var(--danger-10);
	--v-button-color: var(--danger);
	--v-button-background-color-hover: var(--danger-25);
	--v-button-color-hover: var(--danger);
}

.action-batch {
	--v-button-background-color: var(--warning-10);
	--v-button-color: var(--warning);
	--v-button-background-color-hover: var(--warning-25);
	--v-button-color-hover: var(--warning);
}

.layout {
	--layout-offset-top: 64px;
}
</style>
