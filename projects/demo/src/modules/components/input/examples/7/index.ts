import {Component} from '@angular/core';
import {UntypedFormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-example-7',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputExample7 {
    readonly control = new UntypedFormControl(null, [
        Validators.required,
        Validators.minLength(5),
    ]);
}
