/* eslint-disable no-restricted-syntax,no-restricted-imports */
import {Directive, forwardRef, Inject, Input} from '@angular/core';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';
import {TUI_NUMBER_FORMAT, TUI_NUMBER_FORMAT_OBSERVABLE} from '@taiga-ui/core/tokens';
import {BehaviorSubject} from 'rxjs';

@Directive({
    selector: '[tuiNumberFormat]',
    providers: [
        {
            provide: TUI_NUMBER_FORMAT_OBSERVABLE,
            useExisting: forwardRef(() => TuiNumberFormatDirective),
        },
    ],
})
export class TuiNumberFormatDirective extends BehaviorSubject<TuiNumberFormatSettings> {
    @Input()
    set tuiNumberFormat(format: Partial<TuiNumberFormatSettings>) {
        this.next({...this.settings, decimalLimit: NaN, ...format});
    }

    constructor(
        @Inject(TUI_NUMBER_FORMAT) private readonly settings: TuiNumberFormatSettings,
    ) {
        super({...settings, decimalLimit: NaN});
    }
}
