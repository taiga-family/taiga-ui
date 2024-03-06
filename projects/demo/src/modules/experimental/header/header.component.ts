import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample, TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {tuiDocExampleOptionsProvider} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-header',
    templateUrl: './header.template.html',
    styleUrls: ['./header.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
})
export class ExampleTuiCellComponent {
    protected readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };
}
