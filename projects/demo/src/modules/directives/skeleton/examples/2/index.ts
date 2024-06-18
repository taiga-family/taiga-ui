import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel} from '@taiga-ui/core';
import {TuiSkeletonDirective, TuiSwitchComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiLabel, TuiSwitchComponent, FormsModule, TuiSkeletonDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected skeleton = false;
}
