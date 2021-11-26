import {Component} from '@angular/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-multi-select-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMultiSelectExample6 {
    readonly items: readonly string[] = [
        'گراهام چپمن',
        'جان کلیز',
        'تری گیلیام',
        'اریک آیدل',
        'تری جونز',
        'مایکل پیلین',
    ];

    value: readonly string[] = [this.items[0]];
}
