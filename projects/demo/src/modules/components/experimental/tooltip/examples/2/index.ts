import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfieldControllerModule, TuiTextfieldOptionsDirective} from '@taiga-ui/core';
import {TuiTooltipModule} from '@taiga-ui/experimental';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputModule,
        TuiTextfieldOptionsDirective,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiTooltipModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value = '';
}
