import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCheckbox, TuiIcon, TuiRadio, TuiTitle} from '@taiga-ui/core';
import {TuiBlock, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiBlock,
        TuiCheckbox,
        TuiIcon,
        TuiRadio,
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
        testValue1: new FormControl(true),
        testValue2: new FormControl({value: false, disabled: true}),
        testValue3: new FormControl({value: true, disabled: true}),
        testValue4: new FormControl(false),
        testValue5: new FormControl(),
    });
}
`;export{t as default};
