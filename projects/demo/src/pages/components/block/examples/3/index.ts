import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCheckbox, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBlock, TuiSwitch, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiAvatar,
        TuiBlock,
        TuiCheckbox,
        TuiIcon,
        TuiSwitch,
        TuiTitle,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        testValue1: new FormControl(false),
        testValue2: new FormControl(false),
        testValue3: new FormControl(false),
        testValue4: new FormControl(false),
    });
}
