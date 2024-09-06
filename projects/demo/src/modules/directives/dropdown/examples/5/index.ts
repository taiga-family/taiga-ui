import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdown, TuiLabel, TuiSurface} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [FormsModule, TuiCardLarge, TuiDropdown, TuiLabel, TuiSurface, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}
