import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

import {TuiPortalsExample1} from './examples/1';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiPortalsExample1],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected host = import('./examples/setup/create-host.md?raw');
    protected service = import('./examples/setup/create-service.md?raw');
    protected insert = import('./examples/setup/insert-host.md?raw');

    protected readonly example1 = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'portal.ts': import('./examples/1/portal.ts?raw'),
        'service.ts': import('./examples/1/service.ts?raw'),
    };
}
