import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 * A key/value dictionary of icon names and src to be defined with TuiSvgService
 */
export const TUI_ICON_STARTS = tuiCreateToken<Record<string, string>>({});
