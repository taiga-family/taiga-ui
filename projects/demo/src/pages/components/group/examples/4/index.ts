import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroup, TuiRadio, TuiTitle} from '@taiga-ui/core';
import {TuiBlock} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiBlock, TuiGroup, TuiRadio, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({value: new FormControl('')});
}
