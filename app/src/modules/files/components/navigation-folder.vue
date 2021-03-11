<template>
	<div>
		<d-list-item
			v-if="folder.children === undefined"
			:to="`/files?folder=${folder.id}`"
			:active="currentFolder === folder.id"
			exact
			@contextmenu.native.prevent.stop="$refs.contextMenu.activate"
		>
			<d-list-item-icon><d-icon name="folder" /></d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="folder.name" />
			</d-list-item-content>
		</d-list-item>

		<d-list-group
			v-else
			:to="`/files?folder=${folder.id}`"
			:active="currentFolder === folder.id"
			:value="folder.id"
			scope="files-navigation"
			exact
			disable-groupable-parent
			@contextmenu.native.prevent.stop="$refs.contextMenu.activate"
		>
			<template #activator>
				<d-list-item-icon>
					<d-icon name="folder" />
				</d-list-item-icon>
				<d-list-item-content>
					<d-text-overflow :text="folder.name" />
				</d-list-item-content>
			</template>

			<navigation-folder
				v-for="childFolder in folder.children"
				:key="childFolder.id"
				:folder="childFolder"
				:current-folder="currentFolder"
				:click-handler="clickHandler"
			/>
		</d-list-group>

		<d-menu ref="contextMenu" show-arrow placement="bottom-start">
			<d-list>
				<d-list-item @click="renameActive = true">
					<d-list-item-icon>
						<d-icon name="edit" outline />
					</d-list-item-icon>
					<d-list-item-content>
						<d-text-overflow :text="$t('rename_folder')" />
					</d-list-item-content>
				</d-list-item>
				<d-list-item @click="moveActive = true">
					<d-list-item-icon>
						<d-icon name="folder_move" />
					</d-list-item-icon>
					<d-list-item-content>
						<d-text-overflow :text="$t('move_to_folder')" />
					</d-list-item-content>
				</d-list-item>
				<d-list-item @click="deleteActive = true">
					<d-list-item-icon>
						<d-icon name="delete" outline />
					</d-list-item-icon>
					<d-list-item-content>
						<d-text-overflow :text="$t('delete_folder')" />
					</d-list-item-content>
				</d-list-item>
			</d-list>
		</d-menu>

		<d-dialog v-model="renameActive" persistent @esc="renameActive = false">
			<v-card>
				<d-card-title>{{ $t('rename_folder') }}</d-card-title>
				<d-card-text>
					<d-input v-model="renameValue" autofocus @keyup.enter="renameSave" />
				</d-card-text>
				<d-card-actions>
					<d-button secondary @click="renameActive = false">{{ $t('cancel') }}</d-button>
					<d-button @click="renameSave" :disabled="renameValue === null" :loading="renameSaving">
						{{ $t('save') }}
					</d-button>
				</d-card-actions>
			</v-card>
		</d-dialog>

		<d-dialog v-model="moveActive" persistent @esc="moveActive = false">
			<v-card>
				<d-card-title>{{ $t('move_to_folder') }}</d-card-title>
				<d-card-text>
					<folder-picker v-model="moveValue" :disabled-folders="[folder.id]" />
				</d-card-text>
				<d-card-actions>
					<d-button secondary @click="moveActive = false">{{ $t('cancel') }}</d-button>
					<d-button @click="moveSave" :loading="moveSaving">{{ $t('save') }}</d-button>
				</d-card-actions>
			</v-card>
		</d-dialog>

		<d-dialog v-model="deleteActive" persistent @esc="deleteActive = false">
			<v-card>
				<d-card-title>{{ $t('delete_folder') }}</d-card-title>
				<d-card-text>
					<d-notice>
						{{ $t('nested_files_folders_will_be_moved') }}
					</d-notice>
				</d-card-text>
				<d-card-actions>
					<d-button secondary @click="deleteActive = false">{{ $t('cancel') }}</d-button>
					<d-button @click="deleteSave" :loading="deleteSaving">{{ $t('delete') }}</d-button>
				</d-card-actions>
			</v-card>
		</d-dialog>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch, computed } from '@vue/composition-api';
import useFolders, { Folder } from '../composables/use-folders';
import api from '@/api';
import FolderPicker from './folder-picker.vue';
import router from '@/router';
import { unexpectedError } from '@/utils/unexpected-error';

export default defineComponent({
	name: 'navigation-folder',
	components: { FolderPicker },
	props: {
		folder: {
			type: Object as PropType<Folder>,
			required: true,
		},
		currentFolder: {
			type: String,
			default: null,
		},
		clickHandler: {
			type: Function,
			default: () => undefined,
		},
	},
	setup(props) {
		const { renameActive, renameValue, renameSave, renameSaving } = useRenameFolder();
		const { moveActive, moveValue, moveSave, moveSaving } = useMoveFolder();
		const { deleteActive, deleteSave, deleteSaving } = useDeleteFolder();

		const { fetchFolders } = useFolders();

		return {
			renameActive,
			renameValue,
			renameSave,
			renameSaving,
			moveActive,
			moveValue,
			moveSave,
			moveSaving,
			deleteActive,
			deleteSave,
			deleteSaving,
		};

		function useRenameFolder() {
			const renameActive = ref(false);
			const renameValue = ref(props.folder.name);
			const renameSaving = ref(false);

			return { renameActive, renameValue, renameSave, renameSaving };

			async function renameSave() {
				renameSaving.value = true;

				try {
					await api.patch(`/folders/${props.folder.id}`, {
						name: renameValue.value,
					});
				} catch (err) {
					unexpectedError(err);
				} finally {
					renameSaving.value = false;
					await fetchFolders();
					renameActive.value = false;
				}
			}
		}

		function useMoveFolder() {
			const moveActive = ref(false);
			const moveValue = ref(props.folder.parent);
			const moveSaving = ref(false);

			return { moveActive, moveValue, moveSave, moveSaving };

			async function moveSave() {
				moveSaving.value = true;

				try {
					await api.patch(`/folders/${props.folder.id}`, {
						parent: moveValue.value,
					});
				} catch (err) {
					unexpectedError(err);
				} finally {
					moveSaving.value = false;
					await fetchFolders();
					moveActive.value = false;
				}
			}
		}

		function useDeleteFolder() {
			const deleteActive = ref(false);
			const deleteSaving = ref(false);

			return { deleteActive, deleteSave, deleteSaving };

			async function deleteSave() {
				deleteSaving.value = true;

				try {
					const foldersToUpdate = await api.get('/folders', {
						params: {
							filter: {
								parent: {
									_eq: props.folder.id,
								},
							},
						},
					});

					const filesToUpdate = await api.get('/files', {
						params: {
							filter: {
								folder: {
									_eq: props.folder.id,
								},
							},
						},
					});

					const newParent = props.folder.parent || null;

					const folderKeys = foldersToUpdate.data.data.map((folder: { id: string }) => folder.id);
					const fileKeys = filesToUpdate.data.data.map((file: { id: string }) => file.id);

					if (folderKeys.length > 0) {
						await api.patch(`/folders/${folderKeys.join(',')}`, { parent: newParent });
					}

					if (fileKeys.length > 0) {
						await api.patch(`/files/${fileKeys.join(',')}`, { folder: newParent });
					}

					await api.delete(`/folders/${props.folder.id}`);

					if (newParent) {
						router.push(`/files?folder=${newParent}`);
					} else {
						router.push('/files');
					}

					deleteActive.value = false;
				} catch (err) {
					unexpectedError(err);
				} finally {
					await fetchFolders();
					deleteSaving.value = false;
				}
			}
		}
	},
});
</script>
