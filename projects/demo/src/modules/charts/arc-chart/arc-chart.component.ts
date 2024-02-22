import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeXL} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-arc-chart',
    templateUrl: './arc-chart.template.html',
    styleUrls: ['./arc-chart.style.less'],
    changeDetection,
})
export class ExampleTuiArcChartComponent {
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

    protected readonly valueVariants = [
        [42],
        [40, 30, 20, 10],
        [13769, 10172, 3018, 2592],
    ];

    protected value = this.valueVariants[0];

    protected readonly maxVariants = [100, 10000, 50000];

    protected max = this.maxVariants[0];

    protected readonly sizeVariants: readonly TuiSizeXL[] = ['m', 'l', 'xl'];

    protected size = this.sizeVariants[0];

    protected minLabel = '0%';

    protected maxLabel = '100%';

    protected activeItemIndex = NaN;
}
