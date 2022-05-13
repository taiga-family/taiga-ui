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
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.txt');

    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.txt');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
    };

    readonly valueVariants = [[42], [40, 30, 20, 10], [13769, 10172, 3018, 2592]];

    value = this.valueVariants[0];

    readonly maxVariants = [100, 10000, 50000];

    max = this.maxVariants[0];

    readonly sizeVariants: readonly TuiSizeXL[] = ['m', 'l', 'xl'];

    size = this.sizeVariants[0];

    minLabel = '0%';

    maxLabel = '100%';

    activeItemIndex = NaN;
}
