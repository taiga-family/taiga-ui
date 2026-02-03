import"./chunk-B4AJQJMI.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

import {TuiPortalsExample1} from './examples/1';
import {TuiPortalsExample2} from './examples/2';

@Component({
    imports: [TuiDemo, TuiPortalsExample1, TuiPortalsExample2],
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

    protected readonly example2 = {
        TypeScript: import('./examples/2/index.ts?raw', {with: {loader: 'text'}}),
        HTML: import('./examples/2/index.html'),
        'popout.html': import('./examples/2/popout.html'),
        'popout.ts': import('./examples/2/popout.ts?raw', {with: {loader: 'text'}}),
        'popout.less': import('./examples/2/popout.less'),
        'popout.service.ts': import('./examples/2/popout.service.ts?raw', {
            with: {loader: 'text'},
        }),
    };
}
`;export{o as default};
