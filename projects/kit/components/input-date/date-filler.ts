import {computed, inject, type Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    changeDateSeparator,
    tuiDirectiveBinding,
} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core/tokens';
import {TUI_DATE_TEXTS} from '@taiga-ui/kit/tokens';
import {identity} from 'rxjs';

export function tuiWithDateFiller(
    fn: (dateFiller: string) => string = identity,
): Signal<string> {
    const texts = inject(TUI_DATE_TEXTS);
    const format = toSignal(inject(TUI_DATE_FORMAT), {
        initialValue: TUI_DEFAULT_DATE_FORMAT,
    });

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
