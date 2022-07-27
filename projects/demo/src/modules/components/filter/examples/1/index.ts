import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBooleanHandler} from '@taiga-ui/cdk';

@Component({
    selector: `tui-filter-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiFilterExample1 {
    readonly form = new FormGroup({
        filters: new FormControl([`Food`]),
    });

    readonly items = [
        `News`,
        `Food`,
        `Clothes`,
        `Popular`,
        `Goods`,
        `Furniture`,
        `Tech`,
        `Building materials`,
    ];

    disabledItemHandler: TuiBooleanHandler<string> = item => item.length < 7;
}
