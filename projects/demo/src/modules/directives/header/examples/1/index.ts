import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitleDirective} from '@taiga-ui/core';
import {TuiButtonModule} from '@taiga-ui/experimental';
import {TuiBadgeNotificationComponent} from '@taiga-ui/kit';
import {TuiHeaderDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiHeaderDirective,
        TuiTitleDirective,
        TuiBadgeNotificationComponent,
        TuiButtonModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
