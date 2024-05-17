import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk';
import type {TuiTextfieldHost} from '@taiga-ui/core/types';

/**
 * An interface to communicate with textfield based controls
 * TODO: Consider moving to legacy in 4.0
 */
export const TUI_TEXTFIELD_HOST = new InjectionToken<TuiTextfieldHost>(
    '[TUI_TEXTFIELD_HOST]',
);

export function tuiAsTextfieldHost(host: Type<TuiTextfieldHost>): Provider {
    return tuiProvide(TUI_TEXTFIELD_HOST, host);
}
