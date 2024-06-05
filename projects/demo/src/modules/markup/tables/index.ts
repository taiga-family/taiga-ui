import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiLinkDirective, TuiNotificationComponent} from '@taiga-ui/core';

import {StylesInfoComponent} from '../../app/styles-info';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        StylesInfoComponent,
        TuiNotificationComponent,
        TuiLinkDirective,
        RouterLink,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected readonly docRoutes = DemoRoute;
}
