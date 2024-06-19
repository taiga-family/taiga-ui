import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiLoader, TuiTitle, TuiTooltip} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiBadgeNotificationComponent,
    TuiCheckboxComponent,
    TuiSensitiveDirective,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCell,
        TuiLoader,
        TuiTooltip,
        TuiAvatarComponent,
        TuiSensitiveDirective,
        TuiBadgeNotificationComponent,
        FormsModule,
        TuiIcon,
        TuiCheckboxComponent,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = false;
}
