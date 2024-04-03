import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiIconComponent} from '@taiga-ui/core';
import {
    TuiBadgedContentComponent,
    TuiBadgeDirective,
    TuiBadgeNotificationComponent,
    TuiInputModule,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiBadgedContentComponent,
        TuiBadgeNotificationComponent,
        TuiInputModule,
        TuiIconComponent,
        TuiButtonDirective,
        TuiBadgeDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
