import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * Handler that always returns `false`.
 */
export const TUI_FALSE_HANDLER = (): false => false;

/**
 * Handler that always returns `true`.
 */
export const TUI_TRUE_HANDLER = (): true => true;
export const TUI_STRINGIFY: PolymorpheusContent = ({$implicit}) => String($implicit);
