import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    protected readonly items = ['Black', 'Gold', 'Silver'];
    protected readonly form = new FormGroup({
        name: new FormControl('', Validators.required),
        date: new FormControl(null, Validators.required),
        color: new FormControl(null, Validators.required),
        quantity: new FormControl<number | null>(null),
        sum: new FormControl(255),
    });
}
