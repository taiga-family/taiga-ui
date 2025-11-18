import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly example1 = {
        'page.routes.ts': import('./routes.ts?raw', {with: {loader: 'text'}}),
        'page.template.html': import('./examples/1/index.html'),
        'page.ts': import('./examples/1/index.ts?raw', {with: {loader: 'text'}}),
        'dialog.component.ts': import('./examples/1/dialog.component.ts?raw', {
            with: {loader: 'text'},
        }),
    };
}
