import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    TuiButtonDirective,
    TuiLinkDirective,
    TuiNotificationComponent,
} from '@taiga-ui/core';
import {TuiIslandDirective} from '@taiga-ui/legacy';

import {StylesInfoComponent} from '../../app/styles-info';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        StylesInfoComponent,
        TuiIslandDirective,
        TuiButtonDirective,
        TuiNotificationComponent,
        TuiLinkDirective,
        RouterLink,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected hoverable = false;

    protected readonly textAlignVariants = ['left', 'right', 'center'] as const;

    protected textAlign: 'center' | 'left' | 'right' = this.textAlignVariants[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    protected size: TuiSizeL | TuiSizeS = this.sizeVariants[0];
    protected readonly routes = DemoRoute;
}
