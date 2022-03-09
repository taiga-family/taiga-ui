import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiContextWithImplicit, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Less} from '!!raw-loader!./examples/4/index.less';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';
import {default as example5Html} from '!!raw-loader!./examples/5/index.html';
import {default as example5Less} from '!!raw-loader!./examples/5/index.less';
import {default as example5Ts} from '!!raw-loader!./examples/5/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-line-chart',
    templateUrl: './line-chart.template.html',
    styleUrls: ['./line-chart.style.less'],
    changeDetection,
})
export class ExampleTuiLineChartComponent {
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

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        LESS: example4Less,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        LESS: example5Less,
    };

    readonly value: readonly TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
        [200, 150],
        [250, 155],
        [300, 190],
        [350, 90],
    ];

    readonly yStringifyVariants: ReadonlyArray<TuiStringHandler<number>> = [
        y => `${(10 * y).toLocaleString('ru-RU', {maximumFractionDigits: 0})} $`,
    ];

    readonly xStringifyVariants: ReadonlyArray<TuiStringHandler<number>> = [
        x => `${100 * x}`,
    ];

    readonly hintContentVariants: ReadonlyArray<
        PolymorpheusContent<TuiContextWithImplicit<TuiPoint>>
    > = [
        '',
        ({$implicit}) =>
            `${100 * $implicit[0]}\n${(10 * $implicit[1]).toLocaleString('ru-RU', {
                maximumFractionDigits: 0,
            })} $`,
    ];

    yStringify: TuiStringHandler<number> | null = null;

    xStringify: TuiStringHandler<number> | null = null;

    hintContent = this.hintContentVariants[0];

    x = 0;

    y = 0;

    width = 400;

    height = 200;

    smoothingFactor = 0;

    filled = false;

    dots = false;
}
