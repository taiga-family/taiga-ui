import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBooleanHandler} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-filter-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFilterExample1 {
    readonly form = new UntypedFormGroup({
        filters: new UntypedFormControl(['Food']),
    });

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
}
