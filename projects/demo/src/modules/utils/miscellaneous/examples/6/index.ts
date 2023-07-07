import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-miscellaneous-example-6',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiMiscellaneousExample6 implements OnInit {
    userDetailsForm = new FormGroup({
        name: new FormControl('', Validators.required),
        address: new FormGroup({
            street: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            zipCode: new FormControl('', Validators.required),
        }),
    });

    ngOnInit(): void {
        tuiMarkControlAsTouchedAndValidate(this.userDetailsForm);
    }
}
