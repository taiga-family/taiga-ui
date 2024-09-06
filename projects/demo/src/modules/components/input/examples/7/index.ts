import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiIcon} from '@taiga-ui/core';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiHint,
        TuiIcon,
        TuiInputModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('', [
        Validators.required,
        Validators.minLength(5),
    ]);
}
