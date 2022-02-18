import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiContextWithImplicit, TuiDay, TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_MONTHS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example2Pipe} from '!!raw-loader!./examples/2/pipe.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

// @dynamic
@Component({
    selector: 'example-tui-line-days-chart',
    templateUrl: './line-days-chart.template.html',
    styleUrls: ['./line-days-chart.style.less'],
    changeDetection,
})
export class ExampleTuiLineDaysChartComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

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

    readonly valueVariants: ReadonlyArray<ReadonlyArray<[TuiDay, number]>> = [
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

    value = this.valueVariants[0];

    readonly labels$: Observable<readonly string[]> = this.months$.pipe(
        map(months => Array.from({length: 3}, (_, i) => months[i])),
    );

    readonly yStringifyVariants: ReadonlyArray<TuiStringHandler<number>> = [
        y => `${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $`,
    ];

    readonly xStringifyVariants$: Observable<ReadonlyArray<TuiStringHandler<TuiDay>>> =
        this.months$.pipe(map(months => [({month, day}) => `${months[month]}, ${day}`]));

    readonly hintContentVariants$: Observable<
        ReadonlyArray<PolymorpheusContent<TuiContextWithImplicit<[TuiDay, number]>>>
    > = this.months$.pipe(
        map(months => [
            '',
            ({$implicit}) =>
                `${months[$implicit[0].month]}, ${$implicit[0].day}\n${(
                    10 * $implicit[1]
                ).toLocaleString('en-US', {
                    maximumFractionDigits: 0,
                })} $`,
        ]),
    );

    yStringify: TuiStringHandler<number> | null = null;

    xStringify: TuiStringHandler<TuiDay> | null = null;

    hintContent: PolymorpheusContent<TuiContextWithImplicit<[TuiDay, number]>> = '';

    dots = false;

    smoothingFactor = 0;

    y = 0;

    height = 200;

    constructor(@Inject(TUI_MONTHS) readonly months$: Observable<readonly string[]>) {}
}
