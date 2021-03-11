<template>
	<div>
		<d-checkbox block :input-value="!!tfaEnabled" @click.native="toggle">
			{{ $t('enabled') }}
			<div class="spacer" />
			<template #append>
				<d-icon name="launch" class="checkbox-icon" :class="{ enabled: tfaEnabled }" />
			</template>
		</d-checkbox>

		<d-dialog persistent v-model="enableActive" @esc="enableActive = false">
			<v-card>
				<template v-if="tfaEnabled === false" v-show="loading === false">
					<d-card-title>
						{{ $t('enter_password_to_enable_tfa') }}
					</d-card-title>
					<d-card-text>
						<d-input v-model="password" :nullable="false" type="password" :placeholder="$t('password')" />

						<d-error v-if="error" :error="error" />
					</d-card-text>
					<d-card-actions>
						<d-button @click="enableActive = false" secondary>{{ $t('cancel') }}</d-button>
						<d-button @click="enableTFA" :loading="loading">{{ $t('next') }}</d-button>
					</d-card-actions>
				</template>

				<d-progress-circular class="loader" indeterminate v-else-if="loading === true" />

				<div v-show="tfaEnabled === true && loading === false">
					<d-card-title>
						{{ $t('tfa_scan_code') }}
					</d-card-title>
					<d-card-text>
						<canvas class="qr" :id="canvasID" />
						<output class="secret">{{ secret }}</output>
					</d-card-text>
					<d-card-actions>
						<d-button @click="enableActive = false">{{ $t('done') }}</d-button>
					</d-card-actions>
				</div>
			</v-card>
		</d-dialog>

		<d-dialog v-model="disableActive">
			<v-card>
				<d-card-title>
					{{ $t('enter_otp_to_disable_tfa') }}
				</d-card-title>
				<d-card-text>
					<d-input type="text" :placeholder="$t('otp')" v-model="otp" :nullable="false" />
					<d-error v-if="error" :error="error" />
				</d-card-text>
				<d-card-actions>
					<d-button class="disable" :loading="loading" @click="disableTFA" :disabled="otp.length !== 6">
						{{ $t('disable_tfa') }}
					</d-button>
				</d-card-actions>
			</v-card>
		</d-dialog>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from '@vue/composition-api';
import api from '@/api';
import qrcode from 'qrcode';
import { nanoid } from 'nanoid';

export default defineComponent({
	props: {
		value: {
			type: String,
			default: null,
		},
	},
	setup(props) {
		const tfaEnabled = ref(!!props.value);
		const enableActive = ref(false);
		const disableActive = ref(false);
		const loading = ref(false);
		const canvasID = nanoid();
		const secret = ref<string>();
		const otp = ref('');
		const error = ref<any>();
		const password = ref('');

		onMounted(() => {
			password.value = '';
		});

		watch(
			() => props.value,
			() => {
				tfaEnabled.value = !!props.value;
			},
			{ immediate: true }
		);

		return {
			tfaEnabled,
			enableTFA,
			toggle,
			password,
			enableActive,
			disableActive,
			loading,
			canvasID,
			secret,
			disableTFA,
			otp,
			error,
		};

		function toggle() {
			if (tfaEnabled.value === false) {
				enableActive.value = true;
			} else {
				disableActive.value = true;
			}
		}

		async function enableTFA() {
			if (loading.value === true) return;

			loading.value = true;

			try {
				const response = await api.post('/users/me/tfa/enable', { password: password.value });
				const url = response.data.data.otpauth_url;
				secret.value = response.data.data.secret;
				await qrcode.toCanvas(document.getElementById(canvasID), url);
				tfaEnabled.value = true;
				error.value = null;
			} catch (err) {
				error.value = err;
			} finally {
				loading.value = false;
			}
		}

		async function disableTFA() {
			loading.value = true;

			try {
				await api.post('/users/me/tfa/disable', { otp: otp.value });

				tfaEnabled.value = false;
				disableActive.value = false;
			} catch (err) {
				error.value = err;
			} finally {
				loading.value = false;
			}
		}
	},
});
</script>

<style lang="scss" scoped>
.checkbox-icon {
	--v-icon-color: var(--foreground-subdued);

	&.enabled {
		--v-icon-color: var(--primary);
	}
}

.loader {
	margin: 100px auto;
}

.qr {
	display: block;
	margin: 0 auto;
}

.secret {
	display: block;
	margin: 0 auto;
	color: var(--foreground-subdued);
	font-family: var(--family-monospace);
	letter-spacing: 2.6px;
	text-align: center;
}

.disable {
	--v-button-background-color: var(--warning);
	--v-button-background-color-hover: var(--warning-125);
}

.v-error {
	margin-top: 24px;
}
</style>
