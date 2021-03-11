<template>
	<d-dialog v-model="dialogActive" @esc="dialogActive = false">
		<template #activator="{ on }">
			<d-button
				rounded
				icon
				class="add-new"
				@click="on"
				v-tooltip.bottom="disabled ? $t('not_allowed') : $t('create_folder')"
				:disabled="disabled"
			>
				<d-icon name="create_new_folder" outline />
			</d-button>
		</template>

		<v-card>
			<d-card-title>{{ $t('create_folder') }}</d-card-title>
			<d-card-text>
				<d-input autofocus @keyup.enter="addFolder" :placeholder="$t('folder_name')" v-model="newFolderName" />
			</d-card-text>
			<d-card-actions>
				<d-button secondary @click="dialogActive = false">{{ $t('cancel') }}</d-button>
				<d-button :disabled="newFolderName === null" @click="addFolder" :loading="saving">
					{{ $t('save') }}
				</d-button>
			</d-card-actions>
		</v-card>
	</d-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import useFolders from '../composables/use-folders';
import api from '@/api';
import router from '@/router';
import { unexpectedError } from '@/utils/unexpected-error';

export default defineComponent({
	props: {
		parent: {
			type: String,
			default: null,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	setup(props) {
		const dialogActive = ref(false);
		const saving = ref(false);
		const newFolderName = ref(null);

		const { fetchFolders } = useFolders();

		return { addFolder, dialogActive, newFolderName, saving };

		async function addFolder() {
			saving.value = true;

			try {
				const newFolder = await api.post(`/folders`, {
					name: newFolderName.value,
					parent: props.parent === 'root' ? null : props.parent,
				});

				await fetchFolders();

				dialogActive.value = false;
				newFolderName.value = null;

				router.push({ path: '/files', query: { folder: newFolder.data.data.id } });
			} catch (err) {
				unexpectedError(err);
			} finally {
				saving.value = false;
			}
		}
	},
});
</script>

<style lang="scss" scoped>
.add-new {
	--v-button-background-color: var(--primary-25);
	--v-button-color: var(--primary);
	--v-button-background-color-hover: var(--primary-50);
	--v-button-color-hover: var(--primary);
}
</style>
