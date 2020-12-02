import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-pagination-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiPaginationExample4 {
    days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
}
