import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-table-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTableExample1 {
    readonly data = [
        {
            Name: 'Alex Inkin',
            Balance: 1323525,
        },
        {
            Name: 'Roman Sedov',
            Balance: 423242,
        },
    ] as const;

    readonly columns = Object.keys(this.data[0]);
}
