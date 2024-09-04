import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDropdown, TuiLabel} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiDropdown, TuiLabel, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected open = false;
}
