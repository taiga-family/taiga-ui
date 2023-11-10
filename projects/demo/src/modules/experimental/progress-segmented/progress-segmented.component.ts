import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiProgressBarComponent} from '@taiga-ui/kit';

@Component({
    selector: 'example-progress-segmented',
    templateUrl: './progress-segmented.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleProgressSegmentedComponent {
    value = 3;
    max = 5;
    segments = this.max;

    readonly sizeVariants: ReadonlyArray<TuiProgressBarComponent['size']> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    size: TuiProgressBarComponent['size'] = this.sizeVariants[2];

    readonly colorsVariants: readonly string[][] = [
        ['var(--tui-primary)'],
        ['#39b54a', '#ffd450', '#ffd450', '#fcc521', '#fab619', '#f8a34d', '#e01f19'],
        new Array(20).fill('').map((_, index) => `var(--tui-support-0${index + 1})`),
    ];

    colors: string[] = this.colorsVariants[0];

    readonly basicExample: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    readonly sizesExample: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    readonly colorsExample: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    readonly labelsExample: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
    };

    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    get computedColors(): string[] {
        return this.colors.slice(0, this.segments);
    }
}
