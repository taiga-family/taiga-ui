import {InjectionToken} from '@angular/core';
import {CodeEditor} from '../interfaces/code-editor';

export const TUI_DOC_CODE_EDITOR = new InjectionToken<CodeEditor>(
    'Contains service for opening online IDE e.g. Stackblitz',
);
