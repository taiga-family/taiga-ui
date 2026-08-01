import {Directive, effect, inject} from '@angular/core';
import {NG_VALIDATORS, type ValidatorFn} from '@angular/forms';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import {TuiValidator} from '@taiga-ui/cdk/directives/validator';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiItemsHandlersDirective} from './items-handlers.directive';

@Directive({
    standalone: true,
    providers: [tuiProvide(NG_VALIDATORS, TuiItemsHandlersValidator, true)],
})
export class TuiItemsHandlersValidator extends TuiValidator {
    private readonly handlers = inject(TuiItemsHandlersDirective);
    private initialized = false;

    protected readonly update = effect(() => {
        this.handlers.disabledItemHandler();

        if (this.initialized) {
            this.onChange();
        } else {
            this.initialized = true;
        }
    }, TUI_ALLOW_SIGNAL_WRITES);

    public disabledItemHandler: TuiBooleanHandler<any> = (value) =>
        Array.isArray(value)
            ? value.some((item) => this.handlers.disabledItemHandler()(item))
            : Boolean(value) && this.handlers.disabledItemHandler()(value);

    public override validate: ValidatorFn = ({value}) =>
        this.disabledItemHandler(value) ? {tuiDisabledItem: value} : null;
}
