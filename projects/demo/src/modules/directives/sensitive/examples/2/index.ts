import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiLabelDirective} from '@taiga-ui/core';
import {
    TuiBadgeDirective,
    TuiSensitiveDirective,
    TuiSwitchComponent,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiSensitiveDirective,
        TuiButtonDirective,
        TuiBadgeDirective,
        TuiLabelDirective,
        TuiSwitchComponent,
        FormsModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected sensitive = true;
}
