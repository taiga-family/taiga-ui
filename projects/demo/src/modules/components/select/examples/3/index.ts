import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-select-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSelectExample3 {
    readonly items = ['https://twitter.com/marsibarsi', 'https://twitter.com/waterplea'];

    readonly testForm = new FormGroup({
        email: new FormControl(null),
        signature: new FormControl(''),
    });

    signatureVisible = false;

    toggle() {
        this.signatureVisible = !this.signatureVisible;
    }
}
