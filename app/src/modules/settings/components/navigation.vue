<template>
	<d-list large>
		<d-list-item v-for="item in navItems" :to="item.to" :key="item.to">
			<d-list-item-icon>
				<d-icon :name="item.icon ? item.icon : undefined" :fa="item.fa ? item.fa : undefined" />
			</d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="item.name" />
			</d-list-item-content>
		</d-list-item>

		<d-divider />

		<d-list-item v-for="item in externalItems" :href="item.href" :key="item.href">
			<d-list-item-icon><d-icon :name="item.icon" /></d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="item.name" />
			</d-list-item-content>
		</d-list-item>

		<d-list-item href="https://github.com/directus/directus/releases" class="version">
			<d-list-item-icon><d-icon name="directus" /></d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow class="version" :text="`Directus ${version}`" />
			</d-list-item-content>
		</d-list-item>
	</d-list>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { i18n } from '@/lang';
import { version } from '../../../../package.json';
import { useProjectInfo } from '../composables/use-project-info';

export default defineComponent({
	setup() {
		const { parsedInfo } = useProjectInfo();

		const navItems = [
			{
				fa: 'cogs',
				name: i18n.t('settings_project'),
				to: `/settings/project`,
			},
			{
				fa: 'list',
				name: i18n.t('settings_data_model'),
				to: `/settings/data-model`,
			},
			{
				fa: 'users',
				name: i18n.t('settings_permissions'),
				to: `/settings/roles`,
				outline: true,
			},
			{
				fa: 'bookmark',
				name: i18n.t('settings_presets'),
				to: `/settings/presets`,
			},
			{
				fa: 'anchor',
				name: i18n.t('settings_webhooks'),
				to: `/settings/webhooks`,
			},
		];

		const externalItems = computed(() => {
			const debugInfo = `<!-- Please put a detailed explanation of the problem here. -->

---

### Project details
Directus Version: ${parsedInfo.value?.directus.version}
Environment: ${process.env.NODE_ENV}
OS: ${parsedInfo.value?.os.type} ${parsedInfo.value?.os.version}
Node: ${parsedInfo.value?.node.version}
			`;

			return [
				// {
				// 	icon: 'bug_report',
				// 	name: i18n.t('report_bug'),
				// 	href: `https://github.com/directus/directus/issues/new?body=${encodeURIComponent(debugInfo)}`,
				// 	outline: true,
				// },
				// {
				// 	icon: 'new_releases',
				// 	name: i18n.t('request_feature'),
				// 	href: 'https://github.com/directus/directus/discussions/new',
				// 	outline: true,
				// },
			];
		});

		return { version, navItems, externalItems };
	},
});
</script>

<style lang="scss" scoped>
.version {
	.v-icon {
		color: var(--foreground-subdued);
		transition: color var(--fast) var(--transition);
	}
	::v-deep .v-text-overflow {
		color: var(--foreground-subdued);
		transition: color var(--fast) var(--transition);
	}
	&:hover {
		.v-icon {
			color: var(--foreground-normal-alt);
		}
		::v-deep .v-text-overflow {
			color: var(--foreground-normal-alt);
		}
	}
}
</style>
