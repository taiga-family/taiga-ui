import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_ALWAYS_DASHED,
    TUI_ALWAYS_SOLID,
    TuiLineHandler,
    TuiLineType,
} from '@taiga-ui/addon-charts';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-axes',
    templateUrl: './axes.template.html',
    styleUrls: ['./axes.style.less'],
    changeDetection,
})
export class ExampleTuiAxesComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected readonly lineVariants: readonly TuiLineType[] = [
        'solid',
        'dashed',
        'none',
        'hidden',
    ];

    protected readonly labelsXVariants: ReadonlyArray<ReadonlyArray<string | null>> = [
        [],
        ['', '25%', '50%', '100%'],
        ['One', 'Two', 'Three'],
        ['One', null, '', 'Two and a half', 'Three', null],
    ];

    protected readonly labelsYVariants: ReadonlyArray<readonly string[]> = [
        [],
        ['', '25%', '50%', '100%'],
        ['One', 'Two', 'Three'],
        ['One', '', 'Two and a half', 'Three'],
    ];

    protected readonly handlerVariants: readonly TuiLineHandler[] = [
        TUI_ALWAYS_SOLID,
        TUI_ALWAYS_DASHED,
        index => (index % 2 ? 'dashed' : 'solid'),
    ];

    protected axisX = this.lineVariants[0];

    protected axisXLabels = this.labelsXVariants[0];

    protected axisY = this.lineVariants[0];

    protected axisYInset = false;

    protected axisYLabels = this.labelsYVariants[0];

    protected axisYName = '';

    protected axisYSecondaryInset = false;

    protected axisYSecondaryLabels = this.labelsYVariants[0];

    protected axisYSecondaryName = '';

    protected horizontalLines = 0;

    protected horizontalLinesHandler = this.handlerVariants[0];

    protected verticalLines = 0;

    protected verticalLinesHandler = this.handlerVariants[1];
}
