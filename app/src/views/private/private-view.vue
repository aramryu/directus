<template>
	<d-info v-if="appAccess === false" center :title="$t('no_app_access')" type="danger" icon="block">
		{{ $t('no_app_access_copy') }}

		<template #append>
			<d-button to="/logout">Switch User</d-button>
		</template>
	</d-info>

	<div v-else>
		<v-navigation-drawer app color="sidebar" :permanent="navOpen">
			<template v-slot:append>
				<module-bar />
			</template>
			<div class="module-nav alt-colors">
				<project-info />

				<div class="module-nav-content">
					<slot name="navigation" />
				</div>
			</div>
		</v-navigation-drawer>

		<!-- <div v-else class="private-view" :class="{ theme }"> -->

		<!-- <aside role="navigation" aria-label="Module Navigation" class="navigation" :class="{ 'is-open': navOpen }"> -->
		<!-- </aside> -->
		<!-- <div class="content" ref="contentEl"> -->
		<v-main>
			<v-container ref="contentEl" fluid>
				<header-bar
					show-sidebar-toggle
					:title="title"
					@toggle:sidebar="sidebarOpen = !sidebarOpen"
					@primary="navOpen = !navOpen"
				>
					<template v-for="(_, scopedSlotName) in $scopedSlots" v-slot:[scopedSlotName]="slotData">
						<slot :name="scopedSlotName" v-bind="slotData" />
					</template>

					<template v-slot:actions:append>
						<v-btn icon @click.stop="sidebarOpen = !sidebarOpen">
							<fa icon="bars" />
						</v-btn>
					</template>
				</header-bar>
				<v-navigation-drawer clipped app right v-model="sidebarOpen">
					<template v-slot:append>
						<notifications-preview v-model="notificationsPreviewActive" :sidebar-open="sidebarOpen" />
					</template>

					<div class="flex-container">
						<sidebar-detail-group :sidebar-open="sidebarOpen">
							<slot name="sidebar" />
						</sidebar-detail-group>
					</div>
					<!-- </aside> -->
				</v-navigation-drawer>
				<main>
					<slot />
				</main>
			</v-container>
		</v-main>
		<!-- </div> -->
		<!-- <aside
			role="contentinfo"
			class="sidebar alt-colors"
			aria-label="Module Sidebar"
			:class="{ 'is-open': sidebarOpen }"
			@click="openSidebar"
		> -->

		<!-- <d-overlay class="nav-overlay" :active="navOpen" @click="navOpen = false" /> -->
		<!-- <d-overlay class="sidebar-overlay" :active="sidebarOpen" @click="sidebarOpen = false" /> -->

		<notifications-group v-if="notificationsPreviewActive === false" :dense="sidebarOpen === false" />
		<notification-dialogs />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, toRefs, computed, onUpdated, nextTick } from '@vue/composition-api';
// import ModuleBar from './components/module-bar/';
import SidebarDetailGroup from './components/sidebar-detail-group/';
import HeaderBar from './components/header-bar';
import SidebarButton from './components/sidebar-button/';
import NotificationsGroup from './components/notifications-group/';
import NotificationsPreview from './components/notifications-preview/';
import NotificationDialogs from './components/notification-dialogs/';
import { useUserStore, useAppStore } from '@/stores';
import router from '@/router';
import ModuleBar from '@/views/private/components/module-bar/';
import ProjectInfo from '@/views/private/components/project-info';

export default defineComponent({
	components: {
		SidebarDetailGroup,
		HeaderBar,
		SidebarButton,
		NotificationsGroup,
		NotificationsPreview,
		NotificationDialogs,
		ModuleBar,
		ProjectInfo
	},
	props: {
		title: {
			type: String,
			default: null,
		},
	},
	setup() {
		const navOpen = ref(false);
		const contentEl = ref<Element>();
		const userStore = useUserStore();
		const appStore = useAppStore();

		const appAccess = computed(() => {
			if (!userStore.state.currentUser) return true;
			return userStore.state.currentUser?.role?.app_access || false;
		});

		const notificationsPreviewActive = ref(false);

		const { sidebarOpen } = toRefs(appStore.state);

		const theme = computed(() => {
			return userStore.state.currentUser?.theme || 'auto';
		});

		provide('main-element', contentEl);

		router.afterEach(async (to, from) => {
			contentEl.value?.scrollTo({ top: 0 });

			// await nextTick();

			// const hash = to.hash;

			// if (hash) {
			// 	const linkedEl = document.querySelector(hash) as HTMLElement;

			// 	if (linkedEl) {
			// 		contentEl.value?.scrollTo({ top: linkedEl.offsetTop - 100, behavior: 'smooth' });
			// 	}
			// }
		});

		return {
			contentEl,
			theme,
			sidebarOpen,
			openSidebar,
			notificationsPreviewActive,
			appAccess,
			navOpen
		};

		function openSidebar(event: PointerEvent) {
			if (event.target && (event.target as HTMLElement).classList.contains('close') === false) {
				sidebarOpen.value = true;
			}
		}
	},
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins/breakpoint';

.private-view {
	--content-padding: 12px;
	--content-padding-bottom: 60px;

	display: flex;
	width: 100%;
	height: 100%;
	background-color: var(--background-page);

	.nav-overlay {
		--v-overlay-z-index: 49;

		@include breakpoint(medium) {
			display: none;
		}
	}

	.sidebar-overlay {
		--v-overlay-z-index: 29;

		@include breakpoint(large) {
			display: none;
		}
	}

	.navigation {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 50;
		display: flex;
		height: 100%;
		font-size: 0;
		transform: translateX(-100%);
		transition: transform var(--slow) var(--transition);

		&.is-open {
			transform: translateX(0);
		}

		.module-nav {
			display: inline-block;
			width: 220px;
			height: 100%;
			font-size: 1rem;
			background-color: var(--background-normal);

			&-content {
				height: calc(100% - 44px);
				overflow-x: hidden;
				overflow-y: auto;
			}
		}

		@include breakpoint(medium) {
			position: relative;
			transform: none;
		}
	}

	.content {
		--border-radius: 6px;
		--input-height: 60px;
		--input-padding: 16px; // (60 - 4 - 24) / 2
		--form-vertical-gap: 52px;

		position: relative;
		flex-grow: 1;
		width: 100%;
		height: 100%;
		overflow: auto;
		scroll-padding-top: 100px;

		// Page Content Spacing (Could be converted to Project Setting toggle)
		font-size: 15px;
		line-height: 24px;

		main {
			display: contents;
		}

		// Offset for partially visible sidebar
		@include breakpoint(medium) {
			margin-right: 64px;
		}

		@include breakpoint(large) {
			margin-right: 0;
		}
	}

	.sidebar {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 30;
		width: 284px;
		height: 100%;
		overflow: hidden;
		background-color: var(--background-normal);
		transform: translateX(100%);
		transition: transform var(--slow) var(--transition);

		.spacer {
			flex-grow: 1;
		}

		&.is-open {
			transform: translateX(0);
		}

		.flex-container {
			display: flex;
			flex-direction: column;
			width: 284px;
			height: 100%;
		}

		@include breakpoint(medium) {
			transform: translateX(calc(100% - 64px));
		}

		@include breakpoint(large) {
			position: relative;
			flex-basis: 64px;
			flex-shrink: 0;
			transform: none;
			transition: flex-basis var(--slow) var(--transition);

			&.is-open {
				flex-basis: 284px;
				transform: none;
			}
		}
	}

	@include breakpoint(small) {
		--content-padding: 32px;
		--content-padding-bottom: 132px;
	}
}
</style>
