import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';

import {StylesInfo} from '../../app/styles-info';

@Component({
    standalone: true,
    imports: [TuiDemo, StylesInfo],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly routes = DemoRoute;
}
