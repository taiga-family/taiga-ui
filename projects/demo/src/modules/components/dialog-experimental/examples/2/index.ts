import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiDialog} from '@taiga-ui/experimental';
import {TuiForm, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAutoFocus,
        TuiButton,
        TuiDialog,
        TuiForm,
        TuiTextfield,
        TuiHeader,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}
