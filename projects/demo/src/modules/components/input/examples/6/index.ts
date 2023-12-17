import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputExample6 {
    readonly items = ['Black', 'Gold', 'Silver'];
    readonly form = new UntypedFormGroup({
        name: new UntypedFormControl('', Validators.required),
        date: new UntypedFormControl(null, Validators.required),
        color: new UntypedFormControl(null, Validators.required),
        quantity: new UntypedFormControl(),
        sum: new UntypedFormControl(255),
    });
}
