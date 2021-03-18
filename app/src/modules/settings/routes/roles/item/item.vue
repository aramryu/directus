<template>
	<private-view :title="loading ? $t('loading') : $t('editing_role', { role: item && item.name })">
		<template #headline>{{ $t('settings_permissions') }}</template>
		<template #title-outer:prepend>
			<d-button class="header-icon" rounded icon exact :to="`/settings/roles/`">
				<d-icon name="arrow_back" />
			</d-button>
		</template>
		<template #actions>
			<d-dialog v-model="confirmDelete" v-if="[1, 2].includes(+primaryKey) === false" @esc="confirmDelete = false">
				<template #activator="{ on }">
					<d-button
						rounded
						icon
						class="action-delete"
						:disabled="item === null"
						@click="on"
						v-tooltip.bottom="$t('delete')"
					>
						<d-icon name="delete" outline />
					</d-button>
				</template>

				<d-card>
					<d-card-title>{{ $t('delete_are_you_sure') }}</d-card-title>

					<d-card-actions>
						<d-button @click="confirmDelete = false" secondary>
							{{ $t('cancel') }}
						</d-button>
						<d-button @click="deleteAndQuit" class="action-delete" :loading="deleting">
							{{ $t('delete') }}
						</d-button>
					</d-card-actions>
				</d-card>
			</d-dialog>

			<d-button
				rounded
				icon
				@click="userInviteModalActive = true"
				v-tooltip.bottom="$t('invite_users')"
				class="invite-user"
			>
				<d-icon name="person_add" />
			</d-button>

			<d-button
				rounded
				icon
				:loading="saving"
				:disabled="hasEdits === false"
				@click="saveAndQuit"
				v-tooltip.bottom="$t('save')"
			>
				<d-icon name="check" />
			</d-button>
		</template>

		<template #navigation>
			<settings-navigation />
		</template>

		<users-invite v-model="userInviteModalActive" :role="primaryKey" />

		<div class="roles">
			<d-notice v-if="adminEnabled" type="info">
				{{ $t('admins_have_all_permissions') }}
			</d-notice>

			<permissions-overview v-else :role="primaryKey" :permission="permissionKey" :app-access="appAccess" />

			<d-form
				collection="directus_roles"
				:primary-key="primaryKey"
				:loading="loading"
				:initial-values="item"
				:batch-mode="isBatch"
				v-model="edits"
			/>
		</div>

		<template #sidebar>
			<role-info-sidebar-detail :role="item" />
			<revisions-drawer-detail collection="directus_roles" :primary-key="primaryKey" />
		</template>
	</private-view>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, ref } from '@vue/composition-api';

import SettingsNavigation from '../../../components/navigation.vue';
import router from '@/router';
import RevisionsDrawerDetail from '@/views/private/components/revisions-drawer-detail';
import useItem from '@/composables/use-item';
import { useUserStore, usePermissionsStore } from '@/stores/';
import RoleInfoSidebarDetail from './components/role-info-sidebar-detail.vue';
import PermissionsOverview from './components/permissions-overview.vue';
import UsersInvite from '@/views/private/components/users-invite';

export default defineComponent({
	name: 'roles-item',
	components: { SettingsNavigation, RevisionsDrawerDetail, RoleInfoSidebarDetail, PermissionsOverview, UsersInvite },
	props: {
		primaryKey: {
			type: String,
			required: true,
		},
		permissionKey: {
			type: String,
			default: null,
		},
	},
	setup(props) {
		const userStore = useUserStore();
		const permissionsStore = usePermissionsStore();
		const userInviteModalActive = ref(false);
		const { primaryKey } = toRefs(props);

		const { edits, item, saving, loading, error, save, remove, deleting, isBatch } = useItem(
			ref('directus_roles'),
			primaryKey
		);

		const hasEdits = computed<boolean>(() => Object.keys(edits.value).length > 0);

		const confirmDelete = ref(false);

		const adminEnabled = computed(() => {
			const values = {
				...item.value,
				...edits.value,
			} as Record<string, any>;

			return !!values.admin_access;
		});

		const appAccess = computed(() => {
			const values = {
				...item.value,
				...edits.value,
			} as Record<string, any>;

			return !!values.app_access;
		});

		return {
			item,
			loading,
			error,
			edits,
			hasEdits,
			saving,
			saveAndQuit,
			deleteAndQuit,
			confirmDelete,
			deleting,
			isBatch,
			adminEnabled,
			userInviteModalActive,
			appAccess,
		};

		/**
		 * @NOTE
		 * The userStore contains the information about the role of the current user. We want to
		 * update the userstore to make sure the role information is accurate with the latest changes
		 * in case we're changing the current user's role
		 */

		async function saveAndQuit() {
			await save();
			await userStore.hydrate();
			router.push(`/settings/roles`);
		}

		async function deleteAndQuit() {
			await remove();
			router.push(`/settings/roles`);
		}
	},
});
</script>

<style lang="scss" scoped>
.action-delete {
	--v-button-background-color: var(--danger-10);
	--v-button-color: var(--danger);
	--v-button-background-color-hover: var(--danger-25);
	--v-button-color-hover: var(--danger);
}

.roles {
	padding: var(--content-padding);
	padding-bottom: var(--content-padding-bottom);
}

.v-notice,
.v-skeleton-loader {
	max-width: 800px;
}

.header-icon {
	--v-button-background-color: var(--warning-10);
	--v-button-color: var(--warning);
	--v-button-background-color-hover: var(--warning-25);
	--v-button-color-hover: var(--warning);
}

.permissions-overview,
.roles .v-notice {
	margin-bottom: 48px;
}

.invite-user {
	--v-button-background-color: var(--primary-10);
	--v-button-color: var(--primary);
	--v-button-background-color-hover: var(--primary-25);
	--v-button-color-hover: var(--primary);
}
</style>
