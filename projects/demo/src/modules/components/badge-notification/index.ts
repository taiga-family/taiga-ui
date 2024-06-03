import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
import {TuiLabelDirective} from '@taiga-ui/core';
import {TuiBadgeNotificationComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiBadgeNotificationComponent, TuiLabelDirective],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleTuiBadgeNotificationComponent {
    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeXS> = [
        'l',
        'm',
        's',
        'xs',
    ];

    protected size: TuiSizeL | TuiSizeXS = this.sizeVariants[0];
}
