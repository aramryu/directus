<template>
	<d-list large>
		<d-list-item @click="clearNavFilter" :active="!activeFilter">
			<d-list-item-icon>
				<d-icon name="access_time" />
			</d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="$t('all_activity')" />
			</d-list-item-content>
		</d-list-item>

		<d-list-item
			@click="setNavFilter('user', currentUserID)"
			:active="activeFilter && activeFilter.field === 'user' && activeFilter.value === currentUserID"
		>
			<d-list-item-icon>
				<d-icon name="face" />
			</d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="$t('my_activity')" />
			</d-list-item-content>
		</d-list-item>

		<d-divider />

		<d-list-item
			@click="setNavFilter('action', 'create')"
			:active="activeFilter && activeFilter.field === 'action' && activeFilter.value === 'create'"
		>
			<d-list-item-icon>
				<d-icon fa="plus-circle" />
			</d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="$t('create')" />
			</d-list-item-content>
		</d-list-item>

		<d-list-item
			@click="setNavFilter('action', 'update')"
			:active="activeFilter && activeFilter.field === 'action' && activeFilter.value === 'update'"
		>
			<d-list-item-icon>
				<d-icon name="check" />
			</d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="$t('update')" />
			</d-list-item-content>
		</d-list-item>

		<d-list-item
			@click="setNavFilter('action', 'delete')"
			:active="activeFilter && activeFilter.field === 'action' && activeFilter.value === 'delete'"
		>
			<d-list-item-icon>
				<d-icon name="clear" />
			</d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="$t('delete')" />
			</d-list-item-content>
		</d-list-item>

		<d-list-item
			@click="setNavFilter('action', 'comment')"
			:active="activeFilter && activeFilter.field === 'action' && activeFilter.value === 'comment'"
		>
			<d-list-item-icon>
				<d-icon name="comments" />
			</d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="$t('comment')" />
			</d-list-item-content>
		</d-list-item>

		<d-list-item
			@click="setNavFilter('action', 'authenticate')"
			:active="activeFilter && activeFilter.field === 'action' && activeFilter.value === 'authenticate'"
		>
			<d-list-item-icon>
				<d-icon name="login" />
			</d-list-item-icon>
			<d-list-item-content>
				<d-text-overflow :text="$t('login')" />
			</d-list-item-content>
		</d-list-item>
	</d-list>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from '@vue/composition-api';
import { useUserStore } from '@/stores/user';
import { nanoid } from 'nanoid';
import { Filter } from '@/types';

export default defineComponent({
	props: {
		filters: {
			type: Array as PropType<Filter[]>,
			required: true,
		},
	},
	setup(props, { emit }) {
		const userStore = useUserStore();
		const currentUserID = computed(() => userStore.state.currentUser?.id);

		const activeFilter = computed(() => {
			return props.filters.find((filter) => filter.locked === true);
		});

		return { currentUserID, setNavFilter, clearNavFilter, activeFilter };

		function setNavFilter(key: string, value: any) {
			emit('update:filters', [
				...props.filters.filter((filter) => {
					return filter.locked === false;
				}),
				{
					key: nanoid(),
					locked: true,
					field: key,
					operator: 'eq',
					value: value,
				},
			]);
		}

		function clearNavFilter() {
			emit(
				'update:filters',
				props.filters.filter((filter) => {
					return filter.locked === false;
				})
			);
		}
	},
});
</script>
