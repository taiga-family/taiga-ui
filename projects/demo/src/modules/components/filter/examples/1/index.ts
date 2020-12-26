import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiBooleanHandler} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-filter-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFilterExample1 {
    readonly items = [
        'News',
        'Food',
        'Clothes',
        'Popular',
        'Goods',
        'Furniture',
        'Tech',
        'Building materials',
    ];

    disabledItemHandler: TuiBooleanHandler<string> = item => item.length < 7;

    readonly form = new FormGroup({
        filters: new FormControl(['Food']),
    });
}
