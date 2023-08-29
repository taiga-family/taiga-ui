import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {RawLoaderContent, TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-fade',
    templateUrl: './fade.template.html',
    styleUrls: ['./fade.style.less'],
    changeDetection,
})
export class ExampleTuiFadeComponent {
    readonly exampleModule: RawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: RawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    lineHeight = '100%';
    size = '1.5em';
    offset = '0em';
}
