import {Component} from '@angular/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-pagination-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiPaginationExample1 {
    length = 64;

    index = 10;

    goToPage(index: number) {
        this.index = index;
        console.log('New page:', index);
    }
}
