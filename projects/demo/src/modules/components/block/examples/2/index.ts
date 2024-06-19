import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroupDirective} from '@taiga-ui/core';
import {TuiBlock, TuiFadeDirective, TuiRadio} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiRadio,
        ReactiveFormsModule,
        TuiGroupDirective,
        TuiBlock,
        TuiFadeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl('orange'),
    });
}
