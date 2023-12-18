import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-radio-block-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiRadioBlockExample4 {
    readonly items = ['Kiwi', 'Orange', 'Apple'];
    readonly form = new UntypedFormGroup({
        control: new UntypedFormControl(this.items[1]),
    });
}
