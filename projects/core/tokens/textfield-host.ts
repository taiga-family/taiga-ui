import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiTextfieldHost} from '@taiga-ui/core/interfaces';

/**
 * An interface to communicate with textfield based controls
 */
export const TUI_TEXTFIELD_HOST = new InjectionToken<TuiTextfieldHost>(
    `[TUI_TEXTFIELD_HOST]`,
);

export function tuiAsTextfieldHost(useExisting: Type<TuiTextfieldHost>): Provider {
    return {
        provide: TUI_TEXTFIELD_HOST,
        useExisting,
    };
}
