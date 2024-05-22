import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'example-tui-data-list',
    templateUrl: './data-list.template.html',
    changeDetection,
})
export class ExampleTuiDataListComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');

    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1 = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2 = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3 = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };

    protected readonly example4 = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        'custom-list.component.ts': import(
            './examples/4/custom-list/custom-list.component.ts?raw'
        ),
        'custom-list.template.html': import(
            './examples/4/custom-list/custom-list.template.html?raw'
        ),
    };

    protected readonly example5 = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

    protected readonly example6 = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
    };
}
