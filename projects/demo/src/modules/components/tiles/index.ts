import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected debounce = 0;
    protected order = new Map<number, number>();

    protected width = 1;
    protected height = 1;
}
