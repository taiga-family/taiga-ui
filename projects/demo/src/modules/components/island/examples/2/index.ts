import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';
import {TuiIslandDirective} from '@taiga-ui/legacy';

@Component({
    imports: [ReactiveFormsModule, TuiButton, TuiIslandDirective, TuiLink, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue: new FormControl(true),
    });
}
