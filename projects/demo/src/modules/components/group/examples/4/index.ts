import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroup, TuiTitle} from '@taiga-ui/core';
import {TuiBlock, TuiRadio} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiGroup, ReactiveFormsModule, TuiBlock, TuiTitle, TuiRadio],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(''),
    });
}
