import type {Provider, Type} from '@angular/core';
import {tuiCreateToken, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

export const TUI_AUXILIARY = tuiCreateToken(null);

export function tuiAsAuxiliary(x: Type<unknown>): Provider {
    return tuiProvide(TUI_AUXILIARY, x);
}
