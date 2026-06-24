import {Directive, inject} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({host: {'(blur)': 'control?.control?.updateValueAndValidity()'}})
export class TuiUnfinishedValidatorRefresh {
    protected readonly control = inject(NgControl, {self: true, optional: true});
}
