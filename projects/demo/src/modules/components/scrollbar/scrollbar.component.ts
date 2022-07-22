import {Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-scrollbar',
    templateUrl: './scrollbar.template.html',
})
export class ExampleTuiScrollbarComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/component.ts?raw'),
        HTML: import('./examples/1/template.html?raw'),
        LESS: import('./examples/1/style.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/component.ts?raw'),
        HTML: import('./examples/2/template.html?raw'),
        LESS: import('./examples/2/style.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/component.ts?raw'),
        HTML: import('./examples/3/template.html?raw'),
        LESS: import('./examples/3/style.less?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/component.ts?raw'),
        HTML: import('./examples/4/template.html?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/component.ts?raw'),
        HTML: import('./examples/5/template.html?raw'),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/component.ts?raw'),
        HTML: import('./examples/6/template.html?raw'),
        LESS: import('./examples/6/style.less?raw'),
    };
}
