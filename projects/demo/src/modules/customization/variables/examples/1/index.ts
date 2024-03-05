import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCheckboxModule, TuiLabelDirective} from '@taiga-ui/experimental';
import {TuiInputModule, TuiIslandModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-variables-example-1',
    imports: [
        TuiIslandModule,
        TuiInputModule,
        FormsModule,
        TuiLabelDirective,
        TuiCheckboxModule,
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
