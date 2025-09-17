import {computed, inject, type ProviderToken, type Signal} from '@angular/core';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiIconEnd} from '@taiga-ui/core/directives/icons';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';

export function tuiTextfieldIcon(
    token: ProviderToken<{icon: TuiStringHandler<TuiSizeL | TuiSizeS>}>,
): Signal<string> {
    const textfield = inject(TUI_TEXTFIELD_OPTIONS);
    const options = inject(token);

    return tuiIconEnd(computed(() => options.icon(textfield.size())));
}
