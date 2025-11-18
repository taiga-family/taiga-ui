import {InjectionToken, type Provider, type Type} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

export const TUI_AUXILIARY = new InjectionToken(ngDevMode ? 'TUI_AUXILIARY' : '', {
    factory: () => null,
});

export function tuiAsAuxiliary(x: Type<unknown>): Provider {
    return tuiProvide(TUI_AUXILIARY, x);
}
