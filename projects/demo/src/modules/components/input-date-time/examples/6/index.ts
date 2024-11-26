import {Component} from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';

const completeDateTimeValidator: ValidatorFn = (
    control: AbstractControl,
): ValidationErrors | null =>
    control.value.every(Boolean) ? null : {incompleteDateTime: true};

@Component({
    selector: 'tui-input-date-time-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputDateTimeExample6 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(
            [new TuiDay(2017, 2, 15), null],
            completeDateTimeValidator,
        ),
    });
}
