import"./chunk-HU6DUUP4.js";var r=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

import Example1 from './examples/1';
import Example2 from './examples/2';

@Component({
    imports: [Example1, Example2, TuiDemo],
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
        'portal.ts': import('./examples/2/portal.ts?raw', {with: {loader: 'text'}}),
        'service.ts': import('./examples/2/service.ts?raw', {with: {loader: 'text'}}),
    };
}
`;export{r as default};
