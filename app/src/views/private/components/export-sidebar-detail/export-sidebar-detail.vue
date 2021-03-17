<template>
	<sidebar-detail icon="save" :title="$t('export_data')">
		<div class="fields">
			<div class="field full">
				<p class="type-label">{{ $t('format') }}</p>
				<d-select
					:items="[
						{
							text: $t('csv'),
							value: 'csv',
						},
						{
							text: $t('json'),
							value: 'json',
						},
					]"
					v-model="format"
				/>
				<d-checkbox v-model="useFilters" :label="$t('use_current_filters_settings')" />
			</div>

			<div class="field full">
				<d-button full-width @click="exportData">
					{{ $t('export_collection', { collection: collection.name }) }}
				</d-button>
			</div>
		</div>
	</sidebar-detail>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from '@vue/composition-api';
import { Collection } from '@/types';
import api from '@/api';
import { getRootPath } from '@/utils/get-root-path';

export default defineComponent({
	props: {
		layoutQuery: {
			type: Object,
			default: () => ({}),
		},
		searchQuery: {
			type: String,
			default: null,
		},
		collection: {
			type: Object as PropType<Collection>,
			required: true,
		},
	},
	setup(props) {
		const format = ref('csv');
		const useFilters = ref(true);

		return { format, useFilters, exportData };

		function exportData() {
			const url = getRootPath() + `items/${props.collection.collection}`;

			let params: Record<string, any> = {
				access_token: api.defaults.headers.Authorization.substring(7),
			};

			if (format.value === 'csv') {
				params.export = 'csv';
			} else {
				params.export = 'json';
			}

			if (useFilters.value === true) {
				params = {
					...params,
					...props.layoutQuery,
				};

				if (props.searchQuery) {
					params.search = props.searchQuery;
				}
			}

			const qs = Object.keys(params)
				.map((key) => `${key}=${params[key]}`)
				.join('&');

			window.open(`${url}?${qs}`);
		}
	},
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/form-grid';

.fields {
	--form-vertical-gap: 24px;

	@include form-grid;

	.type-label {
		font-size: 1rem;
	}
}

.v-checkbox {
	margin-top: 8px;
}
</style>
