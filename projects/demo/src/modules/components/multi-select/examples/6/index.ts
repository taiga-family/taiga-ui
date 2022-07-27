import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-multi-select-example-6`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiMultiSelectExample6 {
    readonly items: readonly string[] = [
        `گراهام چپمن`,
        `جان کلیز`,
        `تری گیلیام`,
        `اریک آیدل`,
        `تری جونز`,
        `مایکل پیلین`,
    ];

    value: readonly string[] = [this.items[0]];
}
