import {computed, Directive, inject, input} from '@angular/core';
import {TUI_DATE_FORMAT, type TuiDateFormatSettings} from '@taiga-ui/core/tokens';

@Directive({
    selector: '[tuiDateFormat]',
    providers: [
        {
            provide: TUI_DATE_FORMAT,
            useFactory: () => {
                const parent = inject(TUI_DATE_FORMAT, {skipSelf: true});
                const format = inject(TuiDateFormat).tuiDateFormat;

                return computed(() => ({...parent(), ...format()}));
            },
        },
    ],
})
export class TuiDateFormat {
    public readonly tuiDateFormat = input.required<Partial<TuiDateFormatSettings>>();
}
