import type {ProviderToken, Signal} from '@angular/core';
import {computed, inject} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';

export function tuiTextfieldIconBinding(
    token: ProviderToken<{icon: TuiHandler<TuiSizeL | TuiSizeS, string>}>,
): Signal<string> {
    const textfield = inject(TUI_TEXTFIELD_OPTIONS);
    const options = inject(token);

    return tuiDirectiveBinding(
        TuiIcons,
        'iconEnd',
        computed(() => options.icon(textfield.size())),
        {},
    );
}
