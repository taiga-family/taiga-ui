import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-table-example-1',
    templateUrl: './index.html',
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
    ];

    readonly columns = Object.keys(this.data[0]);
}
