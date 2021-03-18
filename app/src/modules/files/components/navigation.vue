<template>
	<d-list large>
		<template v-if="loading && (nestedFolders === null || nestedFolders.length === 0)">
			<d-list-item v-for="n in 4" :key="n">
				<d-skeleton-loader type="list-item-icon" />
			</d-list-item>
		</template>

		<div class="folders">
			<d-item-group scope="files-navigation" multiple v-model="openFolders">
				<d-list-group to="/files" value="root" scope="files-navigation" exact disable-groupable-parent>
					<template #activator>
						<d-list-item-icon>
							<d-icon name="folder_special" outline />
						</d-list-item-icon>
						<d-list-item-content>
							<d-text-overflow :text="$t('file_library')" />
						</d-list-item-content>
					</template>

					<navigation-folder
						v-for="folder in nestedFolders"
						:key="folder.id"
						:folder="folder"
						:current-folder="currentFolder"
					/>
				</d-list-group>
			</d-item-group>
		</div>

		<d-divider />

		<d-list-item to="/files/all" exact>
			<d-list-item-icon><d-icon name="file_copy" outline /></d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="$t('all_files')" />
			</d-list-item-content>
		</d-list-item>

		<d-list-item to="/files/mine" exact>
			<d-list-item-icon><d-icon name="folder_shared" /></d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="$t('my_files')" />
			</d-list-item-content>
		</d-list-item>

		<d-list-item to="/files/recent" exact>
			<d-list-item-icon><d-icon name="history" /></d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="$t('recent_files')" />
			</d-list-item-content>
		</d-list-item>
	</d-list>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from '@vue/composition-api';
import useFolders from '../composables/use-folders';
import NavigationFolder from './navigation-folder.vue';
import arraysAreEqual from '@/utils/arrays-are-equal';

export default defineComponent({
	components: { NavigationFolder },
	model: {
		prop: 'currentFolder',
		event: 'filter',
	},
	props: {
		currentFolder: {
			type: String,
			default: null,
		},
	},
	setup(props) {
		const { nestedFolders, folders, error, loading, openFolders } = useFolders();

		setOpenFolders();

		watch(() => props.currentFolder, setOpenFolders);

		return { folders, nestedFolders, error, loading, openFolders };

		function setOpenFolders() {
			if (!folders.value) return [];
			if (!openFolders?.value) return [];

			const shouldBeOpen: string[] = [];
			const folder = folders.value.find((folder) => folder.id === props.currentFolder);

			if (folder && folder.parent) parseFolder(folder.parent);

			const newOpenFolders = [...openFolders.value];

			for (const folderID of shouldBeOpen) {
				if (newOpenFolders.includes(folderID) === false) {
					newOpenFolders.push(folderID);
				}
			}

			if (newOpenFolders.length !== 1 && arraysAreEqual(newOpenFolders, openFolders.value) === false) {
				openFolders.value = newOpenFolders;
			}

			function parseFolder(id: string) {
				if (!folders.value) return;
				shouldBeOpen.push(id);

				const folder = folders.value.find((folder) => folder.id === id);

				if (folder && folder.parent) {
					parseFolder(folder.parent);
				}
			}
		}
	},
});
</script>

<style lang="scss" scoped>
.v-skeleton-loader {
	--v-skeleton-loader-background-color: var(--background-normal-alt);
}

.folders {
	width: 100%;
	overflow-x: hidden;

	::v-deep .v-list-item-content {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}
</style>
