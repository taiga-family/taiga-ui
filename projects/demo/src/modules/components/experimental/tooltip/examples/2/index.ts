import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiTooltipModule} from '@taiga-ui/experimental';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputModule,
        TuiTextfield,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiTooltipModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
