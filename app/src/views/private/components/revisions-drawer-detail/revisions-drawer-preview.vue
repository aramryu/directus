<template>
	<div>
		<d-notice type="info">
			{{ $t('revision_post_update') }}
			<br />
			{{ $t('no_relational_data') }}
		</d-notice>

		<d-form disabled :collection="revision.collection" :primary-key="revision.item" :initial-values="revision.data" />
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Revision } from './types';

export default defineComponent({
	props: {
		revision: {
			type: Object as PropType<Revision>,
			required: true,
		},
	},
});
</script>

<style lang="scss" scoped>
.v-notice {
	margin-bottom: 36px;
}
</style>
