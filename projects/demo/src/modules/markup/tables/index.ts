import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiLink, TuiNotificationComponent} from '@taiga-ui/core';

import {StylesInfoComponent} from '../../app/styles-info';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        StylesInfoComponent,
        TuiNotificationComponent,
        TuiLink,
        RouterLink,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly routes = DemoRoute;
}
