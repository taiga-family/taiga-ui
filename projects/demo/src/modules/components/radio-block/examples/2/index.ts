import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-radio-block-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiRadioBlockExample2 {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl('orange'),
    });

    protected readonly fruits = ['apple', 'orange', 'pineapple'];
}
