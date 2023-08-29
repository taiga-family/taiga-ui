import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'example-tui-data-list-wrapper',
    templateUrl: './data-list-wrapper.template.html',
    changeDetection,
})
export class ExampleTuiDataListWrapperComponent {
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
        TypeScript: import('./examples/3/index.ts?raw'),
    };
}
