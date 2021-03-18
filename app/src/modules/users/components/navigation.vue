<template>
	<d-list large>
		<d-list-item to="/users" exact :active="currentRole === null">
			<d-list-item-icon><d-icon name="folder_shared" outline /></d-list-item-icon>
			<d-list-item-content>{{ $t('all_users') }}</d-list-item-content>
		</d-list-item>

		<d-divider v-if="(roles && roles.length > 0) || loading" />

		<template v-if="loading">
			<d-list-item v-for="n in 4" :key="n">
				<d-skeleton-loader type="list-item-icon" />
			</d-list-item>
		</template>

		<d-list-item
			v-for="{ name, id, icon } in roles"
			:key="id"
			:to="`/users?role=${id}`"
			exact
			:active="currentRole === id"
		>
			<d-list-item-icon><d-icon :name="icon" outline /></d-list-item-icon>
			<d-list-item-content>{{ name }}</d-list-item-content>
		</d-list-item>
	</d-list>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import useNavigation from '../composables/use-navigation';

export default defineComponent({
	props: {
		currentRole: {
			type: String,
			default: null,
		},
	},
	setup() {
		const { roles, loading } = useNavigation();

		return { roles, loading };
	},
});
</script>

<style lang="scss" scoped>
.v-skeleton-loader {
	--v-skeleton-loader-background-color: var(--background-normal-alt);
}

.v-divider {
	--v-divider-color: var(--background-normal-alt);
}
</style>
