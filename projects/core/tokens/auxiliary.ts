import type {Provider, Type} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_AUXILIARY = new InjectionToken(ngDevMode ? 'TUI_AUXILIARY' : '', {
    factory: () => null,
});

export function tuiAsAuxiliary(x: Type<unknown>): Provider {
    return tuiProvide(TUI_AUXILIARY, x);
}
