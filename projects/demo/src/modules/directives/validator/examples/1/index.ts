import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-validator-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiValidatorExample1 {
    readonly items = [`Email`, `Phone`];

    type = this.items[0];

    readonly group = new FormGroup({
        name: new FormControl(``, Validators.required),
        contact: new FormControl(``, Validators.required),
    });

    readonly validator = Validators.email;
}
