import type {TuiDateMode} from '@taiga-ui/cdk/types';
import {tuiCreateToken} from '@taiga-ui/cdk/utils';

/**
 * Active date format for Taiga UI
 */
export const TUI_DATE_FORMAT = tuiCreateToken<TuiDateMode>('DMY');
