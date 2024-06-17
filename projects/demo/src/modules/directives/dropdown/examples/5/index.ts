import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownModule, TuiLabelDirective, TuiSurfaceDirective} from '@taiga-ui/core';
import {TuiSwitchComponent} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiDropdownModule,
        TuiLabelDirective,
        TuiSwitchComponent,
        TuiCardLarge,
        TuiSurfaceDirective,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}
