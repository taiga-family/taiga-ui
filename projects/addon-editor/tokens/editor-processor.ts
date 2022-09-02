import {InjectionToken} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

export const TUI_EDITOR_CONTENT_PROCESSOR: InjectionToken<TuiStringHandler<string>> =
    new InjectionToken<TuiStringHandler<string>>(
        `Content value processor for tui-editor`,
        {factory: () => identity},
    );
