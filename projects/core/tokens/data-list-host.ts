import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk';
import type {TuiDataListHost} from '@taiga-ui/core/types';

/**
 * DataList controller
 */
export const TUI_DATA_LIST_HOST = new InjectionToken<TuiDataListHost<unknown>>(
    '[TUI_DATA_LIST_HOST]',
);

export function tuiAsDataListHost(host: Type<TuiDataListHost<unknown>>): Provider {
    return tuiProvide(TUI_DATA_LIST_HOST, host);
}
