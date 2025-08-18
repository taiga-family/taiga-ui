import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputPhoneModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [JsonPipe, ReactiveFormsModule, TuiButton, TuiInputPhoneModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue: new FormControl('+77777777777', Validators.required),
    });

    protected setValue(): void {
        this.testForm.get('testValue')!.setValue('+79926775676');
    }
}
