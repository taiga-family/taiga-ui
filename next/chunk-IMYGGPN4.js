import"./chunk-B4AJQJMI.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

import {TuiPortalsExample1} from './examples/1';

@Component({
    imports: [TuiDemo, TuiPortalsExample1],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected host = import('./examples/setup/create-host.md');
    protected service = import('./examples/setup/create-service.md');
    protected insert = import('./examples/setup/insert-host.md');

    protected readonly example1 = {
        TypeScript: import('./examples/1/index.ts?raw', {with: {loader: 'text'}}),
        HTML: import('./examples/1/index.html'),
        LESS: import('./examples/1/index.less'),
        'portal.ts': import('./examples/1/portal.ts?raw', {with: {loader: 'text'}}),
        'service.ts': import('./examples/1/service.ts?raw', {with: {loader: 'text'}}),
    };
}
`;export{o as default};
