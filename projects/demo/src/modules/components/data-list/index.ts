import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiNotification} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiNotification],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly example4 = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        'custom-list.component.ts': import('./examples/4/custom-list/index.ts?raw'),
        'custom-list.template.html': import('./examples/4/custom-list/index.html?raw'),
    };
}
