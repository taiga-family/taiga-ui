import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiLanguageLoader} from '@taiga-ui/i18n/types';

/**
 * Webpack chunk loader for Taiga UI libraries i18n
 * @note: cannot be transferred to a shared file
 * ReferenceError: Cannot access 'TUI_LANGUAGE_LOADER' before initialization
 */
export const TUI_LANGUAGE_LOADER = tuiCreateToken<TuiLanguageLoader>();
