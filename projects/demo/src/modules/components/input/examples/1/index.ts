import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputExample1 {
    protected readonly form = new FormGroup({
        name: new FormControl(''),
        phone: new FormControl('', Validators.required),
    });

    protected dialog = false;
}
