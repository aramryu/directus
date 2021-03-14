import { getRootPath } from './utils/get-root-path';

__webpack_public_path__ = getRootPath() + 'admin/';

import { version } from '../package.json';

if (process.env.NODE_ENV === 'development') {
	console.info(`%c🐰 Starting Directus v${version}...`, 'color:Green');
} else {
	console.info(`%c🐰 Starting Directus...`, 'color:Green');
}

console.time('🕓 Application Loaded');

import Vue from 'vue';

import './plugins';

import i18n from './lang/';
import router from './router';

import './styles/main.scss';
import './directives/register';
import './components/register';
import './views/register';

import { registerInterfaces } from './interfaces/register';
import { loadModules } from './modules/register';
import { registerLayouts } from './layouts/register';
import { registerDisplays } from './displays/register';
import { countryFlag } from 'vue-country-flag';
Vue.component('country-flag', countryFlag);

import App from './app.vue';
import vuetify from './plugins/vuetify';

async function init() {
	await Promise.all([registerInterfaces(), registerDisplays(), registerLayouts(), loadModules()]);

	Vue.config.productionTip = false;

	new Vue({
		render: (h) => h(App),
		router,
		vuetify,
		i18n,
	}).$mount('#app');

	console.timeEnd('🕓 Application Loaded');

	console.group(`%c✨ Project Information`, 'color:DodgerBlue'); // groupCollapsed
	console.info(`%cVersion: v${version}`, 'color:DodgerBlue');
	console.info(`%cEnvironment: ${process.env.NODE_ENV}`, 'color:DodgerBlue');
	console.groupEnd();
}

// Prevent the browser from opening files that are dragged on the window
window.addEventListener('dragover', (e) => e.preventDefault(), false);
window.addEventListener('drop', (e) => e.preventDefault(), false);

init();
