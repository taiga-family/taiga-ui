import {InjectionToken} from '@angular/core';

import {TuiCodeEditor} from '../interfaces/code-editor';

export const TUI_DOC_CODE_EDITOR = new InjectionToken<TuiCodeEditor>(
    `[TUI_DOC_CODE_EDITOR]: Contains service for opening online IDE e.g. Stackblitz`,
);
