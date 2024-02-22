import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-multi-select-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMultiSelectExample6 {
    protected readonly items: readonly string[] = [
        'گراهام چپمن',
        'جان کلیز',
        'تری گیلیام',
        'اریک آیدل',
        'تری جونز',
        'مایکل پیلین',
    ];

    protected value: readonly string[] = [this.items[0]];
}
