<template>
	<span>
		<v-chip
			label
			dark
			small
			v-for="t in removeDuplicate(array)"
			:key="`platform-` + t.id"
			:color="`#`+t['platforms_id'].pl_color"
			>
				<fa
					v-if="t['platforms_id'].id == 1 || t['platforms_id'].id == 12 || t['platforms_id'].id == 13"
					:icon="['fab', 'steam-symbol']"
					size="2x"
					pull="left"
				/>
				<fa
					v-else-if="t['platforms_id'].id == 15 || t['platforms_id'].id == 16"
					:icon="['fab', 'itch-io']"
					size="2x"
					pull="left"
				/>
				<fa
					:icon="['fab', t['platforms_id'].pl_icon]"
					v-tooltip="{ content: t['platforms_id'].pl_name }"
					size="2x"
					pull="left"
				/>
		</v-chip>
	</span>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

export default defineComponent({
	props: {
		array: {
			type: [Array, Object] as PropType<any | any[]>,
			default: []
		},
	},
	methods: {
		removeDuplicate(its: Array<Object>) {
			const tarray : Array<Object> = [];
			const farray : Array<String> = [];
			its.forEach(s => {
				let parseValue: string = (<any>s)['platforms_id']['pl_icon'];
				if (!farray.includes(parseValue))
				{
					farray.push(parseValue);
					tarray.push(s);
				}
			});
			return tarray;
		}
	}
})
</script>
