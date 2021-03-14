<template>
	<country-flag
	v-if="flag"
	:country="flag"
	:size="size"
	v-tooltip="{ content: name }"></country-flag>
</template>

<script language="ts">
import { defineComponent } from '@vue/composition-api';
import CountryFlag from "vue-country-flag";

export default defineComponent({
	components: { CountryFlag },
	props: {
		flag: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			required: true,
			default: 'normal'
		},
		name: {
			type: String,
			required: false,
			default: ''
		}
	}
})
</script>
