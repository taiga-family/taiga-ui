import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    RawLoaderContent,
    TuiDocExample,
    tuiDocExampleOptionsProvider,
} from '@taiga-ui/addon-doc';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'example-cell',
    templateUrl: './cell.template.html',
    styleUrls: ['./cell.styles.less'],
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class ExampleTuiCellComponent {
    title = 'Title';
    description = 'Description';
    secondaryTitle = 'Secondary title';
    secondaryDescription = 'Secondary description';

    readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];
    size: TuiSizeL | TuiSizeS = 'l';

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
        TypeScript: import('./examples/2/index.ts?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
    };
}
