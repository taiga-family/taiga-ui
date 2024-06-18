import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel} from '@taiga-ui/core';
import {TuiSensitiveDirective, TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiSensitiveDirective, TuiLabel, TuiSwitch, FormsModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected sensitive = true;
}
