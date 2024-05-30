import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiNotificationComponent} from '@taiga-ui/core';
import {TuiSensitiveDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiNotificationComponent, TuiSensitiveDirective],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected sensitive = true;
}
