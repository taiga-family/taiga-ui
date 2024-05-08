import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule} from '@demo/utils';
import type {TuiLineHandler, TuiLineType} from '@taiga-ui/addon-charts';
import {
    TUI_ALWAYS_DASHED,
    TUI_ALWAYS_SOLID,
    TuiAxesComponent,
} from '@taiga-ui/addon-charts';
import {TuiNotificationModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiAxesComponent, TuiNotificationModule, TuiDemoModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = ['Cool one', 'With bars', 'With horizontal bars'];

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
