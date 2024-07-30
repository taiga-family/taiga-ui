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
    protected readonly examples = [
        'Vertical',
        'Horizontal',
        'All',
        'Hidden',
        'Light scrollbar',
        'Virtual scroll',
        'Show scroll bars on hover',
    ];
}
