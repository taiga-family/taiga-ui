import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiLoader} from '@taiga-ui/core';
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
        TuiLoader,
        TuiTooltipModule,
        TuiAvatarComponent,
        TuiSensitiveDirective,
        TuiBadgeNotificationComponent,
        FormsModule,
        TuiIcon,
        TuiCheckboxComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = false;
}
