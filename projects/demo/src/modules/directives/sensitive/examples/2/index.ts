import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLabel} from '@taiga-ui/core';
import {TuiBadge, TuiSensitive, TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiBadge, TuiButton, TuiLabel, TuiSensitive, TuiSwitch],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected sensitive = true;
}
