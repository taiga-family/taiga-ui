import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TUI_ALWAYS_DASHED,
    TUI_ALWAYS_SOLID,
    TuiAxes,
    type TuiLineHandler,
    type TuiLineType,
} from '@taiga-ui/addon-charts';

@Component({
    imports: [TuiAxes, TuiDemo],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Cool one', 'With bars', 'With horizontal bars'];

    protected readonly lineVariants: readonly TuiLineType[] = [
        'solid',
        'dashed',
        'none',
        'hidden',
    ];

    protected readonly labelsXVariants: ReadonlyArray<ReadonlyArray<string | null>> = [
        [],
        ['', '25%', '50%', '100%', ''],
        ['One', 'Two', 'Three', ''],
        ['One', null, '', 'Two and a half', 'Three', null, ''],
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
        (index) => (index % 2 ? 'dashed' : 'solid'),
    ];

    protected centeredXLabels = false;

    protected axisXLabels = this.labelsXVariants[0]!;
    protected axisYInset = false;
    protected axisYLabels = this.labelsYVariants[0]!;
    protected axisYName = '';
    protected axisYSecondaryInset = false;
    protected axisYSecondaryLabels = this.labelsYVariants[0]!;
    protected axisYSecondaryName = '';
    protected horizontalLines = 1;
    protected horizontalLinesHandler = this.handlerVariants[0]!;
    protected verticalLines = 1;
    protected verticalLinesHandler = this.handlerVariants[1]!;
}
`;export{t as default};
