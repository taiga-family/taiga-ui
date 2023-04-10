import {InjectionToken} from '@angular/core';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

/**
 * @deprecated: drop in v4.0
 * use {@link TUI_EDITOR_VALUE_TRANSFORMER}
 */
export const TUI_EDITOR_CONTENT_PROCESSOR: InjectionToken<TuiStringHandler<string>> =
    new InjectionToken<TuiStringHandler<string>>(`[TUI_EDITOR_CONTENT_PROCESSOR]`, {
        factory: () => identity,
    });
