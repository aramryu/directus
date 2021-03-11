<template>
	<private-view :title="title">
		<template #headline>{{ $t('settings_webhooks') }}</template>

		<template #title-outer:prepend>
			<d-button class="header-icon" rounded icon exact :to="`/settings/webhooks/`">
				<d-icon fa="code" />
			</d-button>
		</template>

		<template #actions>
			<d-dialog v-model="confirmDelete" @esc="confirmDelete = false">
				<template #activator="{ on }">
					<d-button rounded icon class="action-delete" :disabled="item === null" @click="on">
						<d-icon fa="trash" outline />
					</d-button>
				</template>

				<v-card>
					<d-card-title>{{ $t('delete_are_you_sure') }}</d-card-title>

					<d-card-actions>
						<d-button @click="confirmDelete = false" secondary>
							{{ $t('cancel') }}
						</d-button>
						<d-button @click="deleteAndQuit" class="action-delete" :loading="deleting">
							{{ $t('delete') }}
						</d-button>
					</d-card-actions>
				</v-card>
			</d-dialog>

			<d-button rounded icon :loading="saving" :disabled="hasEdits === false" @click="saveAndQuit">
				<d-icon fa="save" />

				<template #append-outer>
					<save-options
						:disabled="hasEdits === false"
						@save-and-stay="saveAndStay"
						@save-and-add-new="saveAndAddNew"
						@save-as-copy="saveAsCopyAndNavigate"
					/>
				</template>
			</d-button>
		</template>

		<template #navigation>
			<settings-navigation />
		</template>

		<d-form
			:loading="loading"
			:initial-values="item"
			collection="directus_webhooks"
			:batch-mode="isBatch"
			:primary-key="primaryKey"
			:validation-errors="validationErrors"
			v-model="edits"
		/>

		<template #sidebar>
			<sidebar-detail icon="info-circle" :title="$t('information')" close>
				<div class="page-description" v-html="marked($t('page_help_settings_webhooks_item'))" />
			</sidebar-detail>
			<revisions-drawer-detail v-if="isNew === false" collection="directus_webhooks" :primary-key="primaryKey" />
		</template>
	</private-view>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, ref } from '@vue/composition-api';

import SettingsNavigation from '../../components/navigation.vue';
import router from '@/router';
import RevisionsDrawerDetail from '@/views/private/components/revisions-drawer-detail';
import useItem from '@/composables/use-item';
import SaveOptions from '@/views/private/components/save-options';
import marked from 'marked';
import i18n from '@/lang';

type Values = {
	[field: string]: any;
};

export default defineComponent({
	name: 'webhooks-item',
	components: { SettingsNavigation, RevisionsDrawerDetail, SaveOptions },
	props: {
		primaryKey: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const { primaryKey } = toRefs(props);

		const {
			isNew,
			edits,
			item,
			saving,
			loading,
			error,
			save,
			remove,
			deleting,
			saveAsCopy,
			isBatch,
			validationErrors,
		} = useItem(ref('directus_webhooks'), primaryKey);

		const hasEdits = computed<boolean>(() => Object.keys(edits.value).length > 0);
		const confirmDelete = ref(false);

		const title = computed(() => {
			if (loading.value) return i18n.t('loading');
			if (isNew.value) return i18n.t('creating_webhook');
			return item.value?.name;
		});

		return {
			item,
			loading,
			error,
			isNew,
			edits,
			hasEdits,
			saving,
			saveAndQuit,
			deleteAndQuit,
			confirmDelete,
			deleting,
			saveAndStay,
			saveAndAddNew,
			saveAsCopyAndNavigate,
			isBatch,
			marked,
			title,
			validationErrors,
		};

		async function saveAndQuit() {
			await save();
			router.push(`/settings/webhooks`);
		}

		async function saveAndStay() {
			await save();
		}

		async function saveAndAddNew() {
			await save();
			router.push(`/settings/webhooks/+`);
		}

		async function saveAsCopyAndNavigate() {
			const newPrimaryKey = await saveAsCopy();
			if (newPrimaryKey) router.push(`/settings/webhooks/${newPrimaryKey}`);
		}

		async function deleteAndQuit() {
			await remove();
			router.push(`/settings/webhooks`);
		}
	},
});
</script>

<style lang="scss" scoped>
.action-delete {
	--v-button-background-color: var(--danger-25);
	--v-button-color: var(--danger);
	--v-button-background-color-hover: var(--danger-50);
	--v-button-color-hover: var(--danger);
}

.v-form {
	padding: var(--content-padding);
	padding-bottom: var(--content-padding-bottom);
}

.header-icon {
	--v-button-background-color: var(--warning-25);
	--v-button-color: var(--warning);
	--v-button-background-color-hover: var(--warning-50);
	--v-button-color-hover: var(--warning);
}
</style>
