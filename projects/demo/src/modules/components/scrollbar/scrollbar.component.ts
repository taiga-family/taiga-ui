import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-scrollbar',
    templateUrl: './scrollbar.template.html',
    changeDetection,
})
export class ExampleTuiScrollbarComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/component.ts?raw'),
        HTML: import('./examples/1/template.html?raw'),
        LESS: import('./examples/1/style.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/component.ts?raw'),
        HTML: import('./examples/2/template.html?raw'),
        LESS: import('./examples/2/style.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/component.ts?raw'),
        HTML: import('./examples/3/template.html?raw'),
        LESS: import('./examples/3/style.less?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/component.ts?raw'),
        HTML: import('./examples/4/template.html?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/component.ts?raw'),
        HTML: import('./examples/5/template.html?raw'),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/component.ts?raw'),
        HTML: import('./examples/6/template.html?raw'),
        LESS: import('./examples/6/style.less?raw'),
    };
}
