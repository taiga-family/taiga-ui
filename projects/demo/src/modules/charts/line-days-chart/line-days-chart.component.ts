import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Less from '!!raw-loader!./examples/2/index.less';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';
import * as example2Pipe from '!!raw-loader!./examples/2/pipe.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, Inject} from '@angular/core';
import {
    TUI_MONTHS,
    TuiContextWithImplicit,
    TuiDay,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

// @dynamic
@Component({
    selector: 'example-tui-line-days-chart',
    templateUrl: './line-days-chart.template.html',
    styleUrls: ['./line-days-chart.style.less'],
    changeDetection,
})
export class ExampleTuiLineDaysChartComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: Record<string, string> = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
        Pipe: example2Pipe,
    };

    readonly valueVariants = [
        new Array(91)
            .fill(0)
            .reduce<ReadonlyArray<[TuiDay, number]>>(
                (array, _, i) => [
                    ...array,
                    [
                        new TuiDay(2020, 0, 1).append({day: i}),
                        (i ? array[i - 1][1] : 100) + Math.random() * 20 - 10,
                    ],
                ],
                [],
            ),
        [
            [new TuiDay(2020, 1, 10), 10],
            [new TuiDay(2020, 1, 15), 150],
            [new TuiDay(2020, 1, 17), 10],
            [new TuiDay(2020, 1, 20), 10],
            [new TuiDay(2020, 1, 25), 150],
            [new TuiDay(2020, 1, 27), 10],
        ],
    ];

    readonly value = this.valueVariants[0];

    readonly labels = Array.from({length: 3}, (_, i) => this.months[i]);

    readonly yStringifyVariants: ReadonlyArray<TuiStringHandler<number>> = [
        y => `${(10 * y).toLocaleString('ru-RU', {maximumFractionDigits: 0})} $`,
    ];

    readonly xStringifyVariants: ReadonlyArray<TuiStringHandler<TuiDay>> = [
        ({month, day}) => `${this.months[month]}, ${day}`,
    ];

    readonly hintContentVariants: ReadonlyArray<
        PolymorpheusContent<TuiContextWithImplicit<[TuiDay, number]>>
    > = [
        '',
        ({$implicit}) =>
            `${this.months[$implicit[0].month]}, ${$implicit[0].day}\n${(
                10 * $implicit[1]
            ).toLocaleString('ru-RU', {maximumFractionDigits: 0})} $`,
    ];

    yStringify: TuiStringHandler<number> | null = null;

    xStringify: TuiStringHandler<TuiDay> | null = null;

    hintContent = this.hintContentVariants[0];

    dots = false;

    smoothingFactor = 0;

    y = 0;

    height = 200;

    constructor(@Inject(TUI_MONTHS) private readonly months: ReadonlyArray<string>) {}
}
