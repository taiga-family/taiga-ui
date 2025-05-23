import {Directive, effect, inject} from '@angular/core';
import {NG_VALIDATORS, type ValidatorFn} from '@angular/forms';
import {tuiProvide, TuiValidator} from '@taiga-ui/cdk';
import {TuiItemsHandlersDirective} from '@taiga-ui/core';

@Directive({
    standalone: true,
    providers: [tuiProvide(NG_VALIDATORS, TuiInputDateValidator, true)],
})
export class TuiInputDateValidator extends TuiValidator {
    private readonly handlers = inject(TuiItemsHandlersDirective);

    protected readonly update = effect(() => {
        this.handlers.disabledItemHandler();
        this.onChange();
    });

    public override validate: ValidatorFn = ({value}) =>
        value && this.handlers.disabledItemHandler()(value)
            ? {tuiDisabledDate: value}
            : null;
}
