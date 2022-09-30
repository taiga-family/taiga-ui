import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-pagination-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiPaginationExample1 {
    length = 64;

    index = 10;

    goToPage(index: number): void {
        this.index = index;
        console.info(`New page:`, index);
    }
}
