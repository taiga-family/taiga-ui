import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-validator-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiValidatorExample1 {
    protected readonly items = ['Email', 'Phone'];

    protected type = this.items[0];

    protected readonly group = new FormGroup({
        name: new FormControl('', Validators.required),
        contact: new FormControl('', Validators.required),
    });

    protected readonly validator = Validators.email;
}
