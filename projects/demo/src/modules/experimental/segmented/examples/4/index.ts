import {Component} from '@angular/core';
import type {IsActiveMatchOptions} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-segmented-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSegmentedExample4 {
    protected selected = 'a';

    protected readonly options: IsActiveMatchOptions = {
        matrixParams: 'exact',
        queryParams: 'exact',
        paths: 'exact',
        fragment: 'exact',
    };
}
