import {InjectionToken} from '@angular/core';
import type {TuiCodeEditor} from '@taiga-ui/addon-doc/types';

/**
 * Service for opening online IDE e.g. Stackblitz
 */
export const TUI_DOC_CODE_EDITOR = new InjectionToken<TuiCodeEditor>(
    '[TUI_DOC_CODE_EDITOR]',
);
