import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroup} from '@taiga-ui/core';
import {TuiBlock, TuiFade, TuiRadio} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiRadio, ReactiveFormsModule, TuiGroup, TuiBlock, TuiFade],
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
