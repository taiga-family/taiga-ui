import {Directive, effect, inject} from '@angular/core';
import type {ValidatorFn} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {TuiValidator} from '@taiga-ui/cdk/directives/validator';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiItemsHandlersDirective} from '@taiga-ui/core/directives/items-handlers';

@Directive({
    standalone: true,
    providers: [tuiProvide(NG_VALIDATORS, TuiInputDateValidator, true)],
})
export class TuiInputDateValidator extends TuiValidator {
    private readonly handlers = inject(TuiItemsHandlersDirective);

    protected readonly update = effect(() => {
        this.handlers.disabledItemHandler();
        this.onChange();
    }, TUI_ALLOW_SIGNAL_WRITES);

    public override validate: ValidatorFn = ({value}) =>
        value && this.handlers.disabledItemHandler()(value)
            ? {tuiDisabledDate: value}
            : null;
}
