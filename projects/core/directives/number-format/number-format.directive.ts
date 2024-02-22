import {Directive, forwardRef, Inject, Input, SkipSelf} from '@angular/core';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';
import {TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import {BehaviorSubject} from 'rxjs';

@Directive({
    selector: '[tuiNumberFormat]',
    providers: [
        {
            provide: TUI_NUMBER_FORMAT,
            useExisting: forwardRef(() => TuiNumberFormatDirective),
        },
    ],
})
export class TuiNumberFormatDirective extends BehaviorSubject<TuiNumberFormatSettings> {
    @Input()
    public set tuiNumberFormat(format: Partial<TuiNumberFormatSettings>) {
        this.next({...this.settings, ...format});
    }

    constructor(
        @SkipSelf()
        @Inject(TUI_NUMBER_FORMAT)
        private readonly settings: TuiNumberFormatSettings,
    ) {
        super({...settings});
    }
}
