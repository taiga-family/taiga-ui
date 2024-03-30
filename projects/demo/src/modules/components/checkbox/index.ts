import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule} from '@demo/utils';
import {TuiNotificationModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemoModule, TuiNotificationModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {}
