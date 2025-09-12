import {AsyncPipe} from '@angular/common';
import {Component, type OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiError} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example implements OnInit {
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
