import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-scrollbar',
    templateUrl: './scrollbar.template.html',
    changeDetection,
})
export class ExampleTuiScrollbarComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/template.html?raw'),
        LESS: import('./examples/1/style.less?raw'),
        TypeScript: import('./examples/1/component.ts?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/template.html?raw'),
        LESS: import('./examples/2/style.less?raw'),
        TypeScript: import('./examples/2/component.ts?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/template.html?raw'),
        LESS: import('./examples/3/style.less?raw'),
        TypeScript: import('./examples/3/component.ts?raw'),
    };

    readonly example4: TuiDocExample = {
        HTML: import('./examples/4/template.html?raw'),
        TypeScript: import('./examples/4/component.ts?raw'),
    };

    readonly example5: TuiDocExample = {
        HTML: import('./examples/5/template.html?raw'),
        TypeScript: import('./examples/5/component.ts?raw'),
    };

    readonly example6: TuiDocExample = {
        HTML: import('./examples/6/template.html?raw'),
        LESS: import('./examples/6/style.less?raw'),
        TypeScript: import('./examples/6/component.ts?raw'),
    };
}
