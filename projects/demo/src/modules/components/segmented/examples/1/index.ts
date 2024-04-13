import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {TuiIconComponent} from '@taiga-ui/core';
import {TuiBadgeNotificationComponent, TuiSegmentedComponent} from '@taiga-ui/kit';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [
        TuiSegmentedComponent,
        NgFor,
        TuiIconComponent,
        TuiBadgeNotificationComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly sizes = ['s', 'm', 'l'] as const;
}
