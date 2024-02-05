import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDocExample,
    TuiDocumentationProperty,
    TuiRawLoaderContent,
} from '@taiga-ui/addon-doc';
import {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';

@Component({
    selector: 'example-button',
    templateUrl: './button.template.html',
    changeDetection,
})
export class ExampleTuiButtonComponent {
    readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    readonly sizes: ReadonlyArray<TuiSizeL | TuiSizeXS> = ['xs', 's', 'm', 'l'];

    size = this.sizes[3];

    readonly appearances = [
        'primary',
        'accent',
        'secondary',
        'destructive',
        'flat',
        'outline',
        'opposite',
        'glass',
        'floating',
    ];

    appearance = this.appearances[0];

    readonly icons = ['', 'tuiIconSearch', 'tuiIconChevronDown'];

    iconLeft = this.icons[0];
    iconRight = this.icons[0];

    loading = false;

    readonly buttonBaseProperties: Record<string, TuiDocumentationProperty> = {
        tuiButton: {
            type: null,
        },
    };
}
