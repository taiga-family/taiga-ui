import type {TuiCodeEditor} from '@taiga-ui/addon-doc/types';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * Service for opening online IDE e.g. Stackblitz
 */
export const TUI_DOC_CODE_EDITOR = tuiCreateToken<TuiCodeEditor>();
