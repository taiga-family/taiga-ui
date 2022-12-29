import {Attribute, Directive, Inject, Injector} from '@angular/core';
import {NG_VALIDATORS, Validator} from '@angular/forms';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk';
import {tuiCreateUnfinishedValidator} from '@taiga-ui/kit/validators';

@Directive({
    selector: '[tuiUnfinishedValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: TuiUnfinishedValidatorDirective,
            multi: true,
        },
    ],
})
export class TuiUnfinishedValidatorDirective implements Validator {
    readonly validate = tuiCreateUnfinishedValidator(
        () => this.injector.get(TUI_FOCUSABLE_ITEM_ACCESSOR),
        this.message || '',
    );

    constructor(
        @Inject(Injector)
        private readonly injector: Injector,
        @Attribute('tuiUnfinishedValidator')
        private readonly message: string | null,
    ) {}
}
