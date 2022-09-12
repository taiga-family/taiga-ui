import {InjectionToken} from '@angular/core';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

export const TUI_EDITOR_CONTENT_PROCESSOR: InjectionToken<TuiStringHandler<string>> =
    new InjectionToken<TuiStringHandler<string>>(
        `[TUI_EDITOR_CONTENT_PROCESSOR]: Content value processor for tui-editor`,
        {factory: () => identity},
    );
