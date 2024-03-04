import {ChangeDetectionStrategy, Component} from '@angular/core';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {type TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'example-progress-segmented',
    templateUrl: './progress-segmented.template.html',
    styleUrls: ['./progress-segmented.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleProgressSegmentedComponent {
    protected value = 3;
    protected max = 5;

    protected readonly sizeVariants: readonly TuiSizeS[] = ['m', 's'];
    protected size: TuiSizeS = this.sizeVariants[0];

    protected readonly colorVariants: ReadonlyArray<string[] | string> = [
        'var(--tui-primary)',
        'lightskyblue',
        '#3682db',
        'rgba(74, 201, 155, 1)',
        new Array(this.max)
            .fill('')
            .map((_, index) => `var(--tui-support-0${index + 1})`),
    ];

    protected color = this.colorVariants[0];

    protected readonly basicExample: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    protected readonly sizesExample: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    protected readonly colorsExample: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected readonly labelsExample: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
}
