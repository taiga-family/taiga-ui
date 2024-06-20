import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel, TuiSurface} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'tui-variables-example-1',
    imports: [
        FormsModule,
        TuiInputModule,
        TuiLabel,
        TuiCheckbox,
        TuiCardLarge,
        TuiSurface,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiVariablesExample1 {
    protected value = '';
    protected checkbox = true;
}
