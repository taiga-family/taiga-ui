import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-miscellaneous-example-6',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiMiscellaneousExample6 implements OnInit {
    userDetailsForm = new UntypedFormGroup({
        name: new UntypedFormControl('', Validators.required),
        address: new UntypedFormGroup({
            street: new UntypedFormControl('', Validators.required),
            city: new UntypedFormControl('', Validators.required),
            zipCode: new UntypedFormControl('', Validators.required),
        }),
    });

    ngOnInit(): void {
        tuiMarkControlAsTouchedAndValidate(this.userDetailsForm);
    }
}
