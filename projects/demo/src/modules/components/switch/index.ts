import {Component} from '@angular/core';
import {TuiNotificationModule} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {TuiDemoModule} from '#/demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemoModule, TuiNotificationModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = ['Platforms', 'Same color'];
}
