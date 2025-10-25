import {computed, Directive, inject, input} from '@angular/core';
import {TUI_DATE_FORMAT, type TuiDateFormatSettings} from '@taiga-ui/core/tokens';

@Directive({
    selector: '[tuiDateFormat]',
    providers: [
        {provide: TUI_DATE_FORMAT, useFactory: () => inject(TuiDateFormat).format},
    ],
})
export class TuiDateFormat {
    private readonly parent = inject(TUI_DATE_FORMAT, {skipSelf: true});
    public readonly tuiDateFormat = input<Partial<TuiDateFormatSettings>>({});
    public readonly format = computed(() => ({
        ...this.parent(),
        ...this.tuiDateFormat(),
    }));
}
