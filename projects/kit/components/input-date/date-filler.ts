import {computed, inject, type Signal} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {TUI_DATE_FORMAT} from '@taiga-ui/core/tokens';
import {TUI_DATE_TEXTS} from '@taiga-ui/kit/tokens';
import {identity} from 'rxjs';

function changeDateSeparator(dateString: string, newDateSeparator: string): string {
    return dateString.replaceAll(/[^0-9A-ZА-Я]/gi, newDateSeparator);
}

export function tuiWithDateFiller(
    fn: (dateFiller: string) => string = identity,
): Signal<string> {
    const texts = inject(TUI_DATE_TEXTS);
    const format = inject(TUI_DATE_FORMAT);

    return tuiDirectiveBinding(
        TuiTextfieldComponent,
        'filler',
        computed(() => {
            const {mode, separator} = format();
            const fillersMap = texts() ?? '';
            const filler = fillersMap && changeDateSeparator(fillersMap[mode], separator);

            return fn(filler);
        }),
        {},
    );
}
