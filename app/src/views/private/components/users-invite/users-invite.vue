<template>
	<d-dialog :active="active" @toggle="$emit('toggle', $event)" @esc="$emit('toggle', false)">
		<v-card>
			<d-card-title>{{ $t('invite_users') }}</d-card-title>

			<d-card-text>
				<div class="grid">
					<div class="field">
						<div class="type-label">{{ $t('emails') }}</div>
						<d-textarea v-model="emails" :placeholder="$t('email_examples')" />
					</div>
					<div class="field" v-if="role === null">
						<div class="type-label">{{ $t('role') }}</div>
						<d-select v-model="roleSelected" :items="roles" />
					</div>
				</div>
			</d-card-text>

			<d-card-actions>
				<d-button secondary @click="$emit('toggle', false)">{{ $t('cancel') }}</d-button>
				<d-button @click="inviteUsers" :disabled="emails === null || emails.length === 0" :loading="loading">
					{{ $t('invite') }}
				</d-button>
			</d-card-actions>
		</v-card>
	</d-dialog>
</template>

<script lang="ts">
import { defineComponent, computed, ref, PropType, watch } from '@vue/composition-api';
import api from '@/api';
import { useNotificationsStore } from '@/stores';
import i18n from '@/lang';
import { unexpectedError } from '@/utils/unexpected-error';

export default defineComponent({
	model: {
		prop: 'active',
		event: 'toggle',
	},
	props: {
		active: {
			type: Boolean,
			default: false,
		},
		role: {
			type: String,
			default: null,
		},
	},
	setup(props, { emit }) {
		const notifications = useNotificationsStore();
		const emails = ref<string>('');
		const roles = ref<Record<string, any>[]>([]);
		const roleSelected = ref<string | null>(props.role);
		const loading = ref(false);

		watch(
			() => props.active,
			() => {
				loadRoles();
			}
		);

		return { emails, inviteUsers, roles, roleSelected, loading };

		async function inviteUsers() {
			loading.value = true;

			try {
				const emailsParsed = emails.value
					.split(/,|\n/)
					.filter((e) => e)
					.map((email) => email.trim());

				await api.post('/users/invite', {
					email: emailsParsed,
					role: roleSelected.value,
				});

				emails.value = '';
				emit('toggle', false);
			} catch (err) {
				unexpectedError(err);
			} finally {
				loading.value = false;
			}
		}

		async function loadRoles() {
			const response = await api.get('/roles');

			roles.value = response.data.data.map((role: Record<string, any>) => ({
				text: role.name,
				value: role.id,
			}));

			if (roles.value.length > 0 && roleSelected.value === null) {
				roleSelected.value = roles.value[0].value;
			}
		}
	},
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/form-grid';

.grid {
	--form-vertical-gap: 20px;

	@include form-grid;
}

.v-card-title {
	font-size: 20px;
}
</style>
