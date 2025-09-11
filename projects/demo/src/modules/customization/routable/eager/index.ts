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
        'page.routes.ts': import('./routes.ts?raw'),
        'page.template.html': import('./examples/1/index.html?raw'),
        'page.ts': import('./examples/1/index.ts?raw'),
        'dialog.component.ts': import('./examples/1/dialog.component.ts?raw'),
    };

    protected readonly example2 = {
        'page.routes.ts': import('./routes.ts?raw'),
        'page.template.html': import('./examples/2/index.html?raw'),
        'page.ts': import('./examples/2?raw'),
        'dialog.component.ts': import('./examples/2/dialog.component.ts?raw'),
    };
}
