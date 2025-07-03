import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 */
export interface TuiTextfieldHost {
    readonly disabled: boolean;
    readonly focusable: boolean;
    readonly inputMode:
        | 'decimal'
        | 'email'
        | 'none'
        | 'numeric'
        | 'search'
        | 'tel'
        | 'text'
        | 'url';
    readonly invalid: boolean;
    onValueChange(value: string): void;
    process(input: HTMLInputElement): void;
    readonly readOnly: boolean;
    readonly value: string;
}

/**
 * @deprecated: drop in v5.0
 * An interface to communicate with textfield based controls
 */
export const TUI_TEXTFIELD_HOST = new InjectionToken<TuiTextfieldHost>(
    ngDevMode ? 'TUI_TEXTFIELD_HOST' : '',
);

/**
 * @deprecated: drop in v5.0
 */
export function tuiAsTextfieldHost(host: Type<TuiTextfieldHost>): Provider {
    return tuiProvide(TUI_TEXTFIELD_HOST, host);
}
