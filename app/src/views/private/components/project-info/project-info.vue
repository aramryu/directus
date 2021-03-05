<template>
	<div class="project-info">
		<module-bar-logo />
		<latency-indicator />
		<span class="name">{{ name }}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import LatencyIndicator from '../latency-indicator';
import ModuleBarLogo from '@/views/private/components/module-bar-logo/';
import { useServerStore, useLatencyStore } from '@/stores/';
import { sortBy } from 'lodash';

export default defineComponent({
	components: { LatencyIndicator, ModuleBarLogo },
	setup() {
		const latencyStore = useLatencyStore();
		const serverStore = useServerStore();

		const name = computed(() => serverStore.state.info?.project?.project_name);

		return { name };
	},
});
</script>

<style lang="scss" scoped>
.project-info {
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: 64px;
	padding: 0 20px;
	color: var(--foreground-normal-alt);
	text-align: left;
	background-color: var(--sidebar);

	.name {
		flex-grow: 1;
		margin-left: 12px;
	}
}
</style>
