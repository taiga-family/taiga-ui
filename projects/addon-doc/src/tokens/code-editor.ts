import {InjectionToken} from '@angular/core';

import type {TuiCodeEditor} from '../interfaces/code-editor';

/**
 * Service for opening online IDE e.g. Stackblitz
 */
export const TUI_DOC_CODE_EDITOR = new InjectionToken<TuiCodeEditor>(
    `[TUI_DOC_CODE_EDITOR]`,
);
