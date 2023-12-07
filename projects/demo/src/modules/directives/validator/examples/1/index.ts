import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-validator-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiValidatorExample1 {
    readonly items = ['Email', 'Phone'];

    type = this.items[0];

    readonly group = new UntypedFormGroup({
        name: new UntypedFormControl('', Validators.required),
        contact: new UntypedFormControl('', Validators.required),
    });

    readonly validator = Validators.email;
}
