import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-currency-example2`,
    templateUrl: `./template.html`,
    encapsulation,
    changeDetection,
})
export class TuiCurrencyExample2 {
    readonly testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl(100),
    });
}
