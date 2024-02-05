import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiRawLoaderContent} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-card',
    templateUrl: './card-large.template.html',
    changeDetection,
})
export class ExampleTuiCardLargeComponent {
    readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    readonly example5: TuiDocExample = {
        HTML: import('./examples/5/index.html?raw'),
    };

    readonly example6: TuiDocExample = {
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
    };

    readonly example7: TuiDocExample = {
        HTML: import('./examples/7/index.html?raw'),
        LESS: import('./examples/7/index.less?raw'),
    };

    readonly example8: TuiDocExample = {
        HTML: import('./examples/8/index.html?raw'),
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
}
