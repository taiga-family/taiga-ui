import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_ALWAYS_DASHED,
    TUI_ALWAYS_SOLID,
    TuiLineHandler,
    TuiLineTypeT,
} from '@taiga-ui/addon-charts';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-axes',
    templateUrl: './axes.template.html',
    styleUrls: ['./axes.style.less'],
    changeDetection,
})
export class ExampleTuiAxesComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
    };

    readonly lineVariants: readonly TuiLineTypeT[] = [
        'solid',
        'dashed',
        'none',
        'hidden',
    ];

    readonly labelsXVariants: ReadonlyArray<ReadonlyArray<string | null>> = [
        [],
        ['', '25%', '50%', '100%'],
        ['One', 'Two', 'Three'],
        ['One', null, '', 'Two and a half', 'Three', null],
    ];

    readonly labelsYVariants: ReadonlyArray<readonly string[]> = [
        [],
        ['', '25%', '50%', '100%'],
        ['One', 'Two', 'Three'],
        ['One', '', 'Two and a half', 'Three'],
    ];

    readonly handlerVariants: readonly TuiLineHandler[] = [
        TUI_ALWAYS_SOLID,
        TUI_ALWAYS_DASHED,
        index => (index % 2 ? 'dashed' : 'solid'),
    ];

    axisX = this.lineVariants[0];

    axisXLabels = this.labelsXVariants[0];

    axisY = this.lineVariants[0];

    axisYInset = false;

    axisYLabels = this.labelsYVariants[0];

    axisYName = '';

    axisYSecondaryInset = false;

    axisYSecondaryLabels = this.labelsYVariants[0];

    axisYSecondaryName = '';

    horizontalLines = 0;

    horizontalLinesHandler = this.handlerVariants[0];

    verticalLines = 0;

    verticalLinesHandler = this.handlerVariants[1];
}
