<template>
	<v-breadcrumbs
		:items="items"
		>
		<template v-slot:item="{ item }">
			<v-breadcrumbs-item>
				<router-link v-if="!item.disabled" :to="item.to">
					<d-icon v-if="item.icon" :name="item.icon" small />
					{{ item.name }}
				</router-link>
				<span v-else>
					<d-icon v-if="item.icon" :name="item.icon" />
					{{ item.name }}
				</span>
			</v-breadcrumbs-item>
		</template>
	</v-breadcrumbs>
	<!-- <span class="v-breadcrumb">
		<span v-for="(item, index) in items" :key="item.name" class="section" :class="{ disabled: item.disabled }">
			<d-icon v-if="index > 0" fa="chevron-right" small />
			<router-link v-if="!item.disabled" :to="item.to" class="section-link">
				<d-icon v-if="item.icon" :name="item.icon" small />
				{{ item.name }}
			</router-link>
			<span v-else class="section-link">
				<d-icon v-if="item.icon" :name="item.icon" />
				{{ item.name }}
			</span>
		</span>
	</span> -->
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

interface Breadcrumb {
	to: string;
	name: string;
	disabled?: boolean;
}

export default defineComponent({
	props: {
		items: {
			type: Array as PropType<Breadcrumb[]>,
			default: () => [],
		},
	},
	setup() {
		return {};
	},
});
</script>

<style>
body {
	--v-breadcrumb-color: var(--foreground-subdued);
	--v-breadcrumb-color-hover: var(--foreground-normal);
	--v-breadcrumb-color-disabled: var(--foreground-subdued);
	--v-breadcrumb-divider-color: var(--foreground-subdued);
}
</style>

<style lang="scss" scoped>
@import '@/styles/mixins/breakpoint';

.v-breadcrumb {
	flex-grow: 1;
	display: inline-block;
	align-items: center;
	font-size: 12px;

	.section {
		display: contents;

		.v-icon {
			--v-icon-color: var(--v-breadcrumb-divider-color);

			margin: 0 4px;
		}

		&-link {
			align-items: center;
			color: var(--v-breadcrumb-color);
			text-decoration: none;

			.v-icon {
				--v-icon-color: var(--v-breadcrumb-color);

				margin: 0 2px;
			}

			&:hover {
				color: var(--v-breadcrumb-color-hover);

				.v-icon {
					--v-icon-color: var(--v-breadcrumb-color-hover);
				}
			}
		}

		&.disabled {
			.section-link,
			.section-link:hover,
			.section-link .v-icon {
				color: var(--v-breadcrumb-color-disabled);
				cursor: default;
			}
		}
	}

	@include breakpoint(small) {
		font-size: inherit;
	}
}
</style>
