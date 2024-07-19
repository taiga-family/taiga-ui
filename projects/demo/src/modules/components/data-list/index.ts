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
    protected readonly example4 = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        'custom-list/index.ts': import('./examples/4/custom-list/index.ts?raw'),
        'custom-list/index.html': import('./examples/4/custom-list/index.html?raw'),
    };
}
