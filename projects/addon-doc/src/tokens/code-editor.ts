import {InjectionToken} from '@angular/core';

import {TuiCodeEditor} from '../interfaces/code-editor';

export const TUI_DOC_CODE_EDITOR = new InjectionToken<TuiCodeEditor>(
    `Contains service for opening online IDE e.g. Stackblitz`,
);
