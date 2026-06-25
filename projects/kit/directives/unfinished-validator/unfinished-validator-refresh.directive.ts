import {Directive, inject} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

@Directive({host: {'(blur)': 'updateValueAndValidity()', '(input)': 'onInput()'}})
export class TuiUnfinishedValidatorRefresh {
    private readonly element = tuiInjectElement<HTMLInputElement>();
    private readonly control = inject(NgControl, {self: true, optional: true});

    protected onInput(): void {
        if (this.control?.control?.value !== null || this.element.value === '') {
            this.updateValueAndValidity();
        }
    }

    protected updateValueAndValidity(): void {
        this.control?.control?.updateValueAndValidity();
    }
}
