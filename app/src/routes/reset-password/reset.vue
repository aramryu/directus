<template>
	<form @submit.prevent="onSubmit">
		<d-input :value="email" disabled />
		<d-input
			:placeholder="$t('password')"
			autofocus
			autocomplete="username"
			type="password"
			v-model="password"
			:disabled="done"
		/>
		<d-notice type="success" v-if="done">{{ $t('password_reset_successful') }}</d-notice>
		<d-notice type="error" v-if="error">
			{{ errorFormatted }}
		</d-notice>
		<d-button v-if="!done" type="submit" :loading="resetting" large>{{ $t('reset') }}</d-button>
		<d-button v-else large :to="signInLink">{{ $t('sign_in') }}</d-button>
	</form>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';
import api from '@/api';
import { translateAPIError } from '@/lang';
import { RequestError } from '@/api';
import jwtPayload from '@/utils/jwt-payload';

export default defineComponent({
	props: {
		token: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const password = ref(null);

		const resetting = ref(false);
		const error = ref<RequestError | null>(null);
		const done = ref(false);

		const errorFormatted = computed(() => {
			if (error.value) {
				return translateAPIError(error.value);
			}
			return null;
		});

		const signInLink = computed(() => `/login`);

		const email = computed(() => jwtPayload(props.token).email);

		return {
			resetting,
			error,
			done,
			password,
			onSubmit,
			signInLink,
			errorFormatted,
			email,
		};

		async function onSubmit() {
			resetting.value = true;
			error.value = null;

			try {
				await api.post(`/auth/password/reset`, {
					password: password.value,
					token: props.token,
				});

				done.value = true;
			} catch (err) {
				error.value = err;
			} finally {
				resetting.value = false;
			}
		}
	},
});
</script>

<style lang="scss" scoped>
.v-input,
.v-notice {
	margin-bottom: 20px;
}
</style>
