import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHint, TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiHint, TuiIcon, TuiTextfield, TuiTooltip],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected value = '';
}
