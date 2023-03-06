import {InjectionToken} from '@angular/core';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

/**
 * Content value processor for tui-editor
 */
export const TUI_EDITOR_CONTENT_PROCESSOR: InjectionToken<TuiStringHandler<string>> =
    new InjectionToken<TuiStringHandler<string>>(`[TUI_EDITOR_CONTENT_PROCESSOR]`, {
        factory: () => identity,
    });
