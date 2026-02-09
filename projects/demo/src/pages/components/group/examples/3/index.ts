import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroup, TuiRadio} from '@taiga-ui/core';
import {TuiBlock} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiBlock, TuiGroup, TuiRadio],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected form = new FormGroup({value: new FormControl('orange')});
}
