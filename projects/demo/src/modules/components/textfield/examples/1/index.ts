import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield, TuiTooltip} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [FormsModule, TuiTextfield, TuiIcon, TuiTooltip],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
