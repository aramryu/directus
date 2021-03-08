<template>
	<private-view class="collections-overview" :title="$tc('collections')">
		<template #title-outer:prepend>
			<d-button class="header-icon" rounded disabled icon secondary>
				<d-icon name="box" />
			</d-button>
		</template>

		<template #navigation>
			<collections-navigation />
		</template>

		<d-table
			v-if="navItems.length > 0"
			:headers.sync="tableHeaders"
			:items="navItems"
			show-resize
			fixed-header
			@click:row="navigateToCollection"
		>
			<template #item.icon="{ item }">
				<d-icon class="icon" :name="item.icon" />
			</template>
		</d-table>

		<d-info icon="box" :title="$t('no_collections')" v-else center>
			<template v-if="isAdmin">
				{{ $t('no_collections_copy_admin') }}
			</template>
			<template #append v-if="isAdmin">
				<d-button to="/settings/data-model/+">{{ $t('create_collection') }}</d-button>
			</template>
			<template v-else>
				{{ $t('no_collections_copy') }}
			</template>
		</d-info>

		<template #sidebar>
			<sidebar-detail icon="info-circle" :title="$t('information')" close>
				<div class="page-description" v-html="marked($t('page_help_collections_overview'))" />
			</sidebar-detail>
		</template>
	</private-view>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import CollectionsNavigation from '../components/navigation.vue';
import { i18n } from '@/lang';
import useNavigation, { NavItem } from '../composables/use-navigation';
import router from '@/router';
import { useUserStore } from '@/stores';

import marked from 'marked';

export default defineComponent({
	name: 'collections-overview',
	components: {
		CollectionsNavigation,
	},
	props: {},
	setup() {
		const userStore = useUserStore();

		const tableHeaders = [
			{
				text: '',
				value: 'icon',
				width: 42,
				sortable: false,
			},
			{
				text: i18n.t('name'),
				value: 'name',
				width: 240,
			},
			{
				text: i18n.t('note'),
				value: 'note',
				width: 360,
			},
		];

		const { navItems } = useNavigation();

		const isAdmin = computed(() => userStore.state.currentUser?.role.admin_access === true);

		return {
			tableHeaders,
			navItems,
			navigateToCollection,
			isAdmin,
			marked,
		};

		function navigateToCollection(navItem: NavItem) {
			router.push(navItem.to);
		}
	},
});
</script>

<style lang="scss" scoped>
.icon {
	--v-icon-color: var(--foreground-subdued);

	::v-deep i {
		vertical-align: unset;
	}
}

.header-icon {
	--v-button-color-disabled: var(--foreground-normal);
}

.v-table {
	padding: var(--content-padding);
	padding-top: 0;
}
</style>
