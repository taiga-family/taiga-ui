import {InjectionToken} from '@angular/core';
import type {UrlTree} from '@angular/router';
import type {TuiStringHandler} from '@taiga-ui/cdk';

export const TUI_DOC_URL_STATE_HANDLER: InjectionToken<TuiStringHandler<UrlTree>> =
    new InjectionToken<TuiStringHandler<UrlTree>>(`[TUI_DOC_URL_STATE_HANDLER]`, {
        factory: () => String,
    });
