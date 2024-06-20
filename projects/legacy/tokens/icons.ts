import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * A key/value dictionary of icon names and src to be defined with TuiSvgService
 * @deprecated
 */
export const TUI_ICONS = tuiCreateToken<Record<string, string>>({});
