import {InjectionToken, Provider, Type} from '@angular/core';
import {TuiTextfieldHost} from '@taiga-ui/core/interfaces';

export const TUI_TEXTFIELD_HOST = new InjectionToken<TuiTextfieldHost>(
    `[TUI_TEXTFIELD_HOST]: An interface to communicate with textfield based controls`,
);

export function tuiAsTextfieldHost(useExisting: Type<TuiTextfieldHost>): Provider {
    return {
        provide: TUI_TEXTFIELD_HOST,
        useExisting,
    };
}
