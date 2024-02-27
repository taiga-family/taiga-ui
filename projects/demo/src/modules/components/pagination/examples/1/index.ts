import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-pagination-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiPaginationExample1 {
    protected length = 64;

    protected index = 10;

    protected goToPage(index: number): void {
        this.index = index;
        console.info('New page:', index);
    }
}
