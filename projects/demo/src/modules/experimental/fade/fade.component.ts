import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDocExample,
    TuiDocumentationProperty,
    TuiRawLoaderContent,
} from '@taiga-ui/addon-doc';

const content = `I am a very long text with
<code>white-space: nowrap</code>
that fades`;

@Component({
    selector: 'example-fade',
    templateUrl: './fade.template.html',
    styleUrls: ['./fade.style.less'],
    changeDetection,
})
export class ExampleTuiFadeComponent {
    readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
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

    lineHeight = '100%';
    size = '1.5em';
    offset = '0em';

    readonly content = content;

    readonly fadeBaseProperties: Record<string, TuiDocumentationProperty> = {
        tuiFade: {
            type: null,
        },
    };
}
