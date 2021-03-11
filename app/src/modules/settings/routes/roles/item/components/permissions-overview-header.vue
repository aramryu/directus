<template>
	<div class="permissions-overview-header">
		<span class="name">{{ $t('collection') }}</span>
		<fa icon="plus-square" v-tooltip="$t('create')" size="2x"/>
		&nbsp;
		<fa icon="eye" v-tooltip="$t('read')" size="2x"/>
		&nbsp;
		<fa icon="edit" v-tooltip="$t('update')" size="2x"/>
		&nbsp;
		<fa icon="minus-square" v-tooltip="$t('delete')" size="2x"/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({});
</script>

<style lang="scss" scoped>
.permissions-overview-header {
	--v-icon-color: var(--foreground-subdued);

	display: flex;
	padding: 12px;
	border-bottom: var(--border-width) solid var(--border-normal);

	.name {
		flex-grow: 1;
		font-weight: 600;
	}

	.v-icon + .v-icon {
		margin-left: 20px;
	}
}
</style>
