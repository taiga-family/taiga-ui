import type {TuiCodeEditor} from '@taiga-ui/addon-doc/types';
import {InjectionToken} from '@angular/core';

/**
 * Service for opening online IDE e.g. Stackblitz
 */
export const TUI_DOC_CODE_EDITOR = new InjectionToken<TuiCodeEditor>(
    ngDevMode ? 'TUI_DOC_CODE_EDITOR' : '',
);
