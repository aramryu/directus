import { computed } from '@vue/composition-api';

export const sizeProps = {
	xSmall: {
		type: Boolean,
		default: false,
	},
	small: {
		type: Boolean,
		default: false,
	},
	normal: {
		type: Boolean,
		default: true,
	},
	large: {
		type: Boolean,
		default: false,
	},
	xLarge: {
		type: Boolean,
		default: false,
	},
};

interface RequiredProps {
	xSmall: boolean;
	small: boolean;
	normal: boolean;
	large: boolean;
	xLarge: boolean;
}

export default function useSizeClass<T>(props: T & RequiredProps) {
	const sizeClass = computed<string | null>(() => {
		if (props.xSmall) return 'x-small';
		if (props.small) return 'small';
		if (props.normal) return 'normal';
		if (props.large) return 'large';
		if (props.xLarge) return 'x-large';
		return null;
	});

	return sizeClass;
}
