import {
    inject,
    InjectionToken,
    type Provider,
    type Signal,
    type Type,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiDataListAccessor<T = unknown> {
    options: Signal<readonly T[]>;
}

export interface TuiDataListHost<T> {
    handleOption?(option: T): void;
    readonly size?: TuiSizeL | TuiSizeS;
}

export const TUI_DATA_LIST_HOST = new InjectionToken<TuiDataListHost<unknown>>(
    ngDevMode ? 'TUI_DATA_LIST_HOST' : '',
);

export function tuiAsDataListHost<T>(host: Type<TuiDataListHost<T>>): Provider {
    return tuiProvide(TUI_DATA_LIST_HOST, host);
}

export const TUI_DATA_LIST_SIZE = new InjectionToken<TuiSizeL | TuiSizeS | ''>(
    ngDevMode ? 'TUI_DATA_LIST_SIZE' : '',
);

export function tuiInjectDataListSize(): TuiSizeL | TuiSizeS {
    const sizes = ['s', 'm', 'l'] as const;

    const size =
        inject(TUI_DATA_LIST_SIZE, {optional: true}) ||
        inject(TUI_DATA_LIST_HOST, {optional: true})?.size;

    return size && sizes.includes(size) ? size : 'l';
}
