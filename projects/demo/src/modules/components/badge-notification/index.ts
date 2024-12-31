import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiDocAPI, TuiDocAPIItem} from '@taiga-ui/addon-doc';
import type {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';
import {TuiLabel} from '@taiga-ui/core';
import {TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiBadgeNotification, TuiDemo, TuiDocAPI, TuiDocAPIItem, TuiLabel],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeXS> = [
        'l',
        'm',
        's',
        'xs',
    ];

    protected size: TuiSizeL | TuiSizeXS = this.sizeVariants[0]!;
}
