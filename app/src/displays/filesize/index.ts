import { defineDisplay } from '@/displays/define';
import handler from './handler';

export default defineDisplay(({ i18n }) => ({
	id: 'filesize',
	name: i18n.t('displays.filesize.filesize'),
	description: i18n.t('displays.filesize.description'),
	icon: 'file-chart-pie',
	handler: handler,
	options: [],
	types: ['integer'],
}));
