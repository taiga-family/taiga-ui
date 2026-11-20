import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    styleUrl: './index.css',
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Toggle & Reset'];
    protected readonly setup = import('./setup.md');
    protected readonly usage = import('./usage.md');
}
