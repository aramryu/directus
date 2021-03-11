<template>
	<d-list-item exact :to="bookmark.to" class="bookmark" @contextmenu.native.prevent.stop="$refs.contextMenu.activate">
		<d-list-item-icon><d-icon name="bookmark" /></d-list-item-icon>
		<d-list-item-content>
			<d-text-overflow :text="bookmark.bookmark" />
		</d-list-item-content>
		<d-list-item-icon v-if="bookmark.scope !== 'user'" class="bookmark-scope">
			<d-icon :name="bookmark.scope === 'role' ? 'people' : 'public'" />
		</d-list-item-icon>

		<d-menu ref="contextMenu" show-arrow placement="bottom-start">
			<d-list>
				<d-list-item @click="renameActive = true" :disabled="isMine === false">
					<d-list-item-icon>
						<d-icon name="edit" outline />
					</d-list-item-icon>
					<d-list-item-content>
						<d-text-overflow :text="$t('rename_bookmark')" />
					</d-list-item-content>
				</d-list-item>
				<d-list-item @click="deleteActive = true" class="danger" :disabled="isMine === false">
					<d-list-item-icon>
						<d-icon name="delete" outline />
					</d-list-item-icon>
					<d-list-item-content>
						<d-text-overflow :text="$t('delete_bookmark')" />
					</d-list-item-content>
				</d-list-item>
			</d-list>
		</d-menu>

		<d-dialog v-model="renameActive" persistent @esc="renameActive = false">
			<v-card>
				<d-card-title>{{ $t('rename_bookmark') }}</d-card-title>
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

		<d-dialog v-model="deleteActive" persistent @esc="deleteActive = false">
			<v-card>
				<d-card-title>{{ $t('delete_bookmark_copy', { bookmark: bookmark.bookmark }) }}</d-card-title>
				<d-card-actions>
					<d-button secondary @click="deleteActive = false">{{ $t('cancel') }}</d-button>
					<d-button @click="deleteSave" :loading="deleteSaving" class="action-delete">
						{{ $t('delete') }}
					</d-button>
				</d-card-actions>
			</v-card>
		</d-dialog>
	</d-list-item>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from '@vue/composition-api';
import { Preset } from '@/types';
import { useUserStore, usePresetsStore } from '@/stores';
import { unexpectedError } from '@/utils/unexpected-error';
import router from '@/router';

export default defineComponent({
	props: {
		bookmark: {
			type: Object as PropType<Preset>,
			required: true,
		},
	},
	setup(props) {
		const contextMenu = ref();
		const userStore = useUserStore();
		const presetsStore = usePresetsStore();

		const isMine = computed(() => props.bookmark.user === userStore.state.currentUser!.id);

		const { renameActive, renameValue, renameSave, renameSaving } = useRenameBookmark();
		const { deleteActive, deleteValue, deleteSave, deleteSaving } = useDeleteBookmark();

		return {
			contextMenu,
			isMine,
			renameActive,
			renameValue,
			renameSave,
			renameSaving,
			deleteActive,
			deleteValue,
			deleteSave,
			deleteSaving,
		};

		function useRenameBookmark() {
			const renameActive = ref(false);
			const renameValue = ref(props.bookmark.bookmark);
			const renameSaving = ref(false);

			return { renameActive, renameValue, renameSave, renameSaving };

			async function renameSave() {
				renameSaving.value = true;

				try {
					await presetsStore.savePreset({
						...props.bookmark,
						bookmark: renameValue.value,
					});

					renameActive.value = false;
				} catch (err) {
					unexpectedError(err);
				} finally {
					renameSaving.value = false;
				}
			}
		}

		function useDeleteBookmark() {
			const deleteActive = ref(false);
			const deleteValue = ref(props.bookmark.bookmark);
			const deleteSaving = ref(false);

			return { deleteActive, deleteValue, deleteSave, deleteSaving };

			async function deleteSave() {
				deleteSaving.value = true;

				try {
					let navigateTo: string | null = null;

					if (+router.currentRoute.query?.bookmark === props.bookmark.id) {
						navigateTo = `/collections/${props.bookmark.collection}`;
					}

					await presetsStore.delete(props.bookmark.id);
					deleteActive.value = false;

					if (navigateTo) {
						router.push(navigateTo);
					}
				} catch (err) {
					unexpectedError(err);
				} finally {
					deleteSaving.value = false;
				}
			}
		}
	},
});
</script>

<style lang="scss" scoped>
.bookmark-scope {
	--v-icon-color: var(--foreground-subdued);

	opacity: 0;
	transition: opacity var(--fast) var(--transition);
}

.bookmark:hover .bookmark-scope {
	opacity: 1;
}

.danger {
	--v-list-item-color: var(--danger);
	--v-list-item-icon-color: var(--danger);
}

.action-delete {
	--v-button-background-color: var(--danger-25);
	--v-button-color: var(--danger);
	--v-button-background-color-hover: var(--danger-50);
	--v-button-color-hover: var(--danger);
}
</style>
