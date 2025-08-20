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
    protected readonly exampleService = import('./examples/import/service.md?raw');

    protected readonly example2 = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        'actions-content.component.ts': import(
            './examples/2/actions-content/index.ts?raw'
        ),
        'actions-content.component.html': import(
            './examples/2/actions-content/index.html?raw'
        ),
        'pdf-content.component.ts': import('./examples/2/pdf-content/index.ts?raw'),
        'pdf-content.component.html': import('./examples/2/pdf-content/index.html?raw'),
        'pdf-content.component.less': import('./examples/2/pdf-content/index.less?raw'),
    };
}
