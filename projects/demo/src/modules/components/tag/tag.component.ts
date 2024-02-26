import {Component, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'example-tag',
    templateUrl: './tag.template.html',
    styleUrls: ['./tag.style.less'],
    changeDetection,
})
export class ExampleTuiTagComponent {
    @ViewChild('errorIcon')
    protected errorTemplate?: TemplateRef<Record<string, unknown>>;

    protected readonly exampleOptions: TuiRawLoaderContent = import(
        './examples/import/define-options.md?raw'
    );

    protected readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
    };

    protected removable = false;

    protected disabled = false;

    protected editable = false;

    protected autoColor = false;

    protected hoverable = false;

    protected showLoader = false;

    protected value = 'John Cleese';

    protected maxLengthVariants: number[] = [10, 20];

    protected maxLength: number | null = null;

    protected readonly statusVariants: readonly TuiStatus[] = [
        'default',
        'primary',
        'custom',
        'success',
        'error',
        'warning',
    ];

    protected status = this.statusVariants[0];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    protected size: TuiSizeL | TuiSizeS = this.sizeVariants[1];

    protected readonly leftContentVariants = ['', 'Error icon'];

    protected leftContentSelected = '';

    protected get leftContent(): PolymorpheusContent {
        return this.leftContentSelected && this.errorTemplate;
    }

    protected editTag(value: string): void {
        this.value = value;
    }
}
