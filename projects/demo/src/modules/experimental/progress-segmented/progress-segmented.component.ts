import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiProgressBarComponent} from '@taiga-ui/kit';

@Component({
    selector: 'example-progress-segmented',
    templateUrl: './progress-segmented.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleProgressSegmentedComponent {
    protected value = 3;
    protected max = 5;
    protected segments = this.max;

    protected readonly sizeVariants: ReadonlyArray<TuiProgressBarComponent['size']> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    protected size: TuiProgressBarComponent['size'] = this.sizeVariants[2];

    protected readonly colorsVariants: readonly string[][] = [
        ['var(--tui-primary)'],
        ['#39b54a', '#ffd450', '#ffd450', '#fcc521', '#fab619', '#f8a34d', '#e01f19'],
        new Array(20).fill('').map((_, index) => `var(--tui-support-0${index + 1})`),
    ];

    protected colors: string[] = this.colorsVariants[0];

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
        LESS: import('./examples/4/index.less?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
    };

    protected readonly noRoundCornersExample: TuiDocExample = {
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
        TypeScript: import('./examples/5/index.ts?raw'),
    };

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected get computedColors(): string[] {
        return this.colors.slice(0, this.segments);
    }
}
