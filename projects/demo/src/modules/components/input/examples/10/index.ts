import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink, TuiNotification} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    imports: [ReactiveFormsModule, TuiInputModule, TuiLink, TuiNotification],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(''),
    });
}
