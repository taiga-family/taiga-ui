import {InjectionToken} from '@angular/core';
import {defaultEditorStyles} from '@taiga-ui/addon-editor/constants';

export const TUI_EDITOR_STYLES = new InjectionToken<string>(`Styles for Editor`, {
    factory: () => defaultEditorStyles,
});
