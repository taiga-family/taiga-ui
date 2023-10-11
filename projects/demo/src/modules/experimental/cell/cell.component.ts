import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDocExample,
    tuiDocExampleOptionsProvider,
    TuiRawLoaderContent,
} from '@taiga-ui/addon-doc';
import {TuiSizeL, TuiSizeS, TuiSizeXXS} from '@taiga-ui/core';

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

    get markerSize(): TuiSizeXXS {
        switch (this.size) {
            case 'l':
                return 's';
            case 'm':
                return 'xs';
            default:
            case 's':
                return 'xxs';
        }
    }

    readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];
    size: TuiSizeL | TuiSizeS = 'l';

    readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: TuiRawLoaderContent = import(
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

    readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
    };

    readonly example5: TuiDocExample = {
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
        TypeScript: import('./examples/5/index.ts?raw'),
    };
}
