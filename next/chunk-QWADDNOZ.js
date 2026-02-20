import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    TuiError,
    TuiIcon,
    TuiInput,
    TuiNotification,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiSegmented, TuiSwitch, TuiTooltip} from '@taiga-ui/kit';
import {TuiCardLarge, TuiForm, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiCardLarge,
        TuiError,
        TuiForm,
        TuiHeader,
        TuiIcon,
        TuiInput,
        TuiNotification,
        TuiSegmented,
        TuiSwitch,
        TuiTitle,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl(''),
        subscribe: new FormControl(false),
        basic: new FormControl(true),
    });
}
`;export{e as default};
