import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDialog, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiForm, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAutoFocus,
        TuiButton,
        TuiDialog,
        TuiForm,
        TuiHeader,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}
