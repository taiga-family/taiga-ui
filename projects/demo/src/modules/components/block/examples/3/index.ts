import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTitle, TuiTooltip} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiBlockDirective,
    TuiCheckboxComponent,
    TuiSwitch,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiAvatarComponent,
        TuiTooltip,
        TuiIcon,
        TuiBlockDirective,
        TuiCheckboxComponent,
        TuiTitle,
        TuiSwitch,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue1: new FormControl(false),
        testValue2: new FormControl(false),
        testValue3: new FormControl(false),
        testValue4: new FormControl(false),
    });
}
