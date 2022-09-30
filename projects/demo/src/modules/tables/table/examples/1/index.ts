import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-table-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiTableExample1 {
    readonly data = [
        {
            name: `Alex Inkin`,
            balance: 1323525,
        },
        {
            name: `Roman Sedov`,
            balance: 423242,
        },
    ] as const;

    readonly columns = Object.keys(this.data[0]);
}
