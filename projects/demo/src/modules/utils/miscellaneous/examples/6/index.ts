import type {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-miscellaneous-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiMiscellaneousExample6 implements OnInit {
    protected userDetailsForm = new FormGroup({
        name: new FormControl('', Validators.required),
        address: new FormGroup({
            street: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            zipCode: new FormControl('', Validators.required),
        }),
    });

    public ngOnInit(): void {
        tuiMarkControlAsTouchedAndValidate(this.userDetailsForm);
    }
}
