import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page extends Array {
    protected host = import('./examples/setup/create-host.md');
    protected service = import('./examples/setup/create-service.md');
    protected insert = import('./examples/setup/insert-host.md');

    protected readonly examples = [
        'Custom portals',
        'Popout window portals',
        'Picture in Picture portals',
    ];

    protected readonly [0] = {
        'portal.ts': import('./examples/1/portal.ts?raw', {with: {loader: 'text'}}),
        'service.ts': import('./examples/1/service.ts?raw', {with: {loader: 'text'}}),
    };

    protected readonly [1] = {
        'popout.html': import('./examples/2/popout.html'),
        'popout.ts': import('./examples/2/popout.ts?raw', {with: {loader: 'text'}}),
        'popout.less': import('./examples/2/popout.less'),
        'popout.service.ts': import('./examples/2/popout.service.ts?raw', {
            with: {loader: 'text'},
        }),
    };

    protected readonly [2] = {
        'popout.html': import('./examples/3/popout.html'),
        'popout.ts': import('./examples/3/popout.ts?raw', {with: {loader: 'text'}}),
        'popout.less': import('./examples/3/popout.less'),
        'popout.service.ts': import('./examples/3/popout.service.ts?raw', {
            with: {loader: 'text'},
        }),
    };
}
