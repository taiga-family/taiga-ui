import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiRawLoaderContent} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-card',
    templateUrl: './card.template.html',
    changeDetection,
})
export class ExampleTuiCardComponent {
    readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import('./examples/7/index.ts?raw'),
        HTML: import('./examples/7/index.html?raw'),
        LESS: import('./examples/7/index.less?raw'),
    };

    readonly example8: TuiDocExample = {
        HTML: import('./examples/8/index.html?raw'),
        LESS: import('./examples/8/index.less?raw'),
    };

    readonly example9: TuiDocExample = {
        HTML: import('./examples/9/index.html?raw'),
    };

    readonly example10: TuiDocExample = {
        HTML: import('./examples/10/index.html?raw'),
        LESS: import('./examples/10/index.less?raw'),
    };

    readonly example11: TuiDocExample = {
        HTML: import('./examples/11/index.html?raw'),
        LESS: import('./examples/11/index.less?raw'),
    };

    readonly example12: TuiDocExample = {
        HTML: import('./examples/12/index.html?raw'),
    };

    readonly example13: TuiDocExample = {
        HTML: import('./examples/13/index.html?raw'),
        LESS: import('./examples/13/index.less?raw'),
    };

    readonly example14: TuiDocExample = {
        HTML: import('./examples/14/index.html?raw'),
        LESS: import('./examples/14/index.less?raw'),
    };

    readonly example15: TuiDocExample = {
        HTML: import('./examples/15/index.html?raw'),
    };

    readonly example16: TuiDocExample = {
        HTML: import('./examples/16/index.html?raw'),
    };

    readonly example17: TuiDocExample = {
        HTML: import('./examples/17/index.html?raw'),
        LESS: import('./examples/17/index.less?raw'),
    };

    readonly example18: TuiDocExample = {
        HTML: import('./examples/18/index.html?raw'),
        LESS: import('./examples/18/index.less?raw'),
    };

    readonly example19: TuiDocExample = {
        HTML: import('./examples/19/index.html?raw'),
    };
}
