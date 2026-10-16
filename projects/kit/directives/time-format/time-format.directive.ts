import {computed, Directive, inject, input} from '@angular/core';
import {TUI_TIME_FORMAT, type TuiTimeFormatSettings} from '@taiga-ui/kit/tokens';

@Directive({
    selector: '[tuiTimeFormat]',
    providers: [
        {
            provide: TUI_TIME_FORMAT,
            useFactory: () => {
                const parent = inject(TUI_TIME_FORMAT, {skipSelf: true});
                const format = inject(TuiTimeFormat).tuiTimeFormat;

                return computed(() => ({...parent(), ...format()}));
            },
        },
    ],
})
export class TuiTimeFormat {
    public readonly tuiTimeFormat = input.required<Partial<TuiTimeFormatSettings>>();
}
