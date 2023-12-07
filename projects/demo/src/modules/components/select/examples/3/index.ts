import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-select-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSelectExample3 {
    readonly items = ['https://twitter.com/marsibarsi', 'https://twitter.com/waterplea'];

    readonly testForm = new UntypedFormGroup({
        email: new UntypedFormControl(null),
        signature: new UntypedFormControl(''),
    });

    signatureVisible = false;

    toggle(): void {
        this.signatureVisible = !this.signatureVisible;
    }
}
