import {computed, Directive, inject, input} from '@angular/core';
import {TUI_NUMBER_FORMAT, type TuiNumberFormatSettings} from '@taiga-ui/core/tokens';

@Directive({
    selector: '[tuiNumberFormat]',
    providers: [
        {
            provide: TUI_NUMBER_FORMAT,
            useFactory: () => {
                const parent = inject(TUI_NUMBER_FORMAT, {skipSelf: true});
                const format = inject(TuiNumberFormat).tuiNumberFormat;

                return computed(() => ({
                    ...parent(),
                    ...format(),
                }));
            },
        },
    ],
})
export class TuiNumberFormat {
    public readonly tuiNumberFormat = input.required<Partial<TuiNumberFormatSettings>>();
}
