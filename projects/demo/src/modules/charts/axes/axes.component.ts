import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiLineHandler, TuiLineType} from '@taiga-ui/addon-charts';
import {TUI_ALWAYS_DASHED, TUI_ALWAYS_SOLID} from '@taiga-ui/addon-charts';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-axes`,
    templateUrl: `./axes.template.html`,
    styleUrls: [`./axes.style.less`],
    changeDetection,
})
export class ExampleTuiAxesComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
        LESS: import(`./examples/1/index.less?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
        LESS: import(`./examples/2/index.less?raw`),
    };

    readonly lineVariants: readonly TuiLineType[] = [`solid`, `dashed`, `none`, `hidden`];

    readonly labelsXVariants: ReadonlyArray<ReadonlyArray<string | null>> = [
        [],
        [``, `25%`, `50%`, `100%`],
        [`One`, `Two`, `Three`],
        [`One`, null, ``, `Two and a half`, `Three`, null],
    ];

    readonly labelsYVariants: ReadonlyArray<readonly string[]> = [
        [],
        [``, `25%`, `50%`, `100%`],
        [`One`, `Two`, `Three`],
        [`One`, ``, `Two and a half`, `Three`],
    ];

    readonly handlerVariants: readonly TuiLineHandler[] = [
        TUI_ALWAYS_SOLID,
        TUI_ALWAYS_DASHED,
        index => (index % 2 ? `dashed` : `solid`),
    ];

    axisX = this.lineVariants[0];

    axisXLabels = this.labelsXVariants[0];

    axisY = this.lineVariants[0];

    axisYInset = false;

    axisYLabels = this.labelsYVariants[0];

    axisYName = ``;

    axisYSecondaryInset = false;

    axisYSecondaryLabels = this.labelsYVariants[0];

    axisYSecondaryName = ``;

    horizontalLines = 0;

    horizontalLinesHandler = this.handlerVariants[0];

    verticalLines = 0;

    verticalLinesHandler = this.handlerVariants[1];
}
