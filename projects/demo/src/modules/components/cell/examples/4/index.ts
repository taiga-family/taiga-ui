import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIconComponent, TuiLoaderModule} from '@taiga-ui/core';
import {TuiTooltipModule} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBadgeNotificationComponent,
    TuiCheckboxComponent,
    TuiSensitiveDirective,
} from '@taiga-ui/kit';
import {TuiCellDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCellDirective,
        TuiLoaderModule,
        TuiTooltipModule,
        TuiAvatarComponent,
        TuiSensitiveDirective,
        TuiBadgeNotificationComponent,
        FormsModule,
        TuiIconComponent,
        TuiCheckboxComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value = false;
}
