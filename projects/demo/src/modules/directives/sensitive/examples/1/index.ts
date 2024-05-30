import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabelDirective} from '@taiga-ui/core';
import {TuiSensitiveDirective, TuiSwitchComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiSensitiveDirective, TuiLabelDirective, TuiSwitchComponent, FormsModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected sensitive = true;
}
