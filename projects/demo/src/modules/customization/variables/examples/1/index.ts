import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiLabelDirective} from '@taiga-ui/experimental';
import {TuiCheckboxComponent, TuiInputModule, TuiIslandModule} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    selector: 'tui-variables-example-1',
    imports: [
        TuiIslandModule,
        TuiInputModule,
        FormsModule,
        TuiLabelDirective,
        TuiCheckboxComponent,
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
