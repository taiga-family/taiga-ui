import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
    protected readonly items = ['Kiwi', 'Orange', 'Apple'];
    protected readonly form = new FormGroup({
        control: new FormControl(this.items[1]),
    });
}
