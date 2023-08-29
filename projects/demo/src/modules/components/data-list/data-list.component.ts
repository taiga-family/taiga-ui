import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'example-tui-data-list',
    templateUrl: './data-list.template.html',
    changeDetection,
})
export class ExampleTuiDataListComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');

    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1 = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    readonly example2 = {
        HTML: import('./examples/2/index.html?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    readonly example3 = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    readonly example4 = {
        HTML: import('./examples/4/index.html?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
        'custom-list.component.ts': import(
            './examples/4/custom-list/custom-list.component.ts?raw'
        ),
        'custom-list.template.html': import(
            './examples/4/custom-list/custom-list.template.html?raw'
        ),
    };

    readonly example5 = {
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
        TypeScript: import('./examples/5/index.ts?raw'),
    };

    readonly example6 = {
        HTML: import('./examples/6/index.html?raw'),
        TypeScript: import('./examples/6/index.ts?raw'),
    };
}
