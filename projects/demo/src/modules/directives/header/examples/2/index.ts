import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiTooltipModule} from '@taiga-ui/experimental';
import {
    TuiAvatarComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
    TuiSensitiveDirective,
} from '@taiga-ui/kit';
import {TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiBadgeNotificationComponent,
        TuiHeaderDirective,
        TuiTitleDirective,
        TuiButtonDirective,
        TuiTooltipModule,
        TuiAvatarComponent,
        TuiSensitiveDirective,
        TuiBadgeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
