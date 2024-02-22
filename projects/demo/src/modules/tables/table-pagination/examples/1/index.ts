import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-table-pagination-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiTablePaginationExample1 {
    protected page = 3;
    protected size = 10;
}
