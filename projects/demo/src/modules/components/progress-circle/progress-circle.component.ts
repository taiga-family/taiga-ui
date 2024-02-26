import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeS, TuiSizeXL} from '@taiga-ui/core';
import {tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: 'example-tui-progress-circle',
    templateUrl: './progress-circle.template.html',
    styleUrls: ['./progress-circle.style.less'],
    changeDetection,
    providers: [tuiInputNumberOptionsProvider({min: 0})],
})
export class ExampleProgressCircleComponent {
    protected value = 6;
    protected max = 10;

    protected readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeXL> = [
        's',
        'm',
        'l',
        'xl',
    ];

    protected size: TuiSizeS | TuiSizeXL = this.sizeVariants[1];

    protected readonly colorVariants: readonly string[] = [
        'var(--tui-primary)',
        'lightskyblue',
        '#3682db',
        'rgba(74, 201, 155, 1)',
        'url(#gradient)',
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

    protected readonly labelExample: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    protected readonly colorsExample: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
    };

    protected readonly dynamicColorExample: TuiDocExample = {
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
        TypeScript: import('./examples/5/index.ts?raw'),
    };

    protected readonly reversedDirectionExample: TuiDocExample = {
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
        TypeScript: import('./examples/6/index.ts?raw'),
    };

    protected readonly thicknessExample: TuiDocExample = {
        HTML: import('./examples/7/index.html?raw'),
        LESS: import('./examples/7/index.less?raw'),
        TypeScript: import('./examples/7/index.ts?raw'),
    };

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
}
