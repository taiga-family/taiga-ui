import {AsyncPipe, JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import type {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiError} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiInputDateTimeModule, TuiUnfinishedValidator} from '@taiga-ui/legacy';

const completeDateTimeValidator: ValidatorFn = (
    control: AbstractControl,
): ValidationErrors | null =>
    control.value?.every(Boolean) ? null : {incompleteDateTime: true};

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        JsonPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputDateTimeModule,
        TuiUnfinishedValidator,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(
        [new TuiDay(2017, 2, 15), null],
        completeDateTimeValidator,
    );

    protected readonly controlWithUnfinishedValidator = new FormControl([
        new TuiDay(2017, 2, 15),
        null,
    ]);
}
