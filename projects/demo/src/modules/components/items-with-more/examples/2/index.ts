import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-items-with-more-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiItemsWithMoreExample2 {
    readonly items = [
        `John Cleese`,
        `Eric Idle`,
        `Graham Chapman`,
        `Michael Palin`,
        `Terry Gilliam`,
        `Terry Jones`,
    ];

    value = this.items.map(() => false);

    onModelChange(index: number): void {
        this.value[index] = !this.value[index];
    }
}
