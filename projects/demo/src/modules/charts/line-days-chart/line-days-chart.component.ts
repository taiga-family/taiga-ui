import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiContext, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiDay} from '@taiga-ui/cdk';
import {TUI_MONTHS} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

@Component({
    selector: 'example-tui-line-days-chart',
    templateUrl: './line-days-chart.template.html',
    styleUrls: ['./line-days-chart.style.less'],
    changeDetection,
})
export class ExampleTuiLineDaysChartComponent {
    protected readonly months$ = inject(TUI_MONTHS);
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
        'pipe.ts': import('./examples/2/pipe.ts?raw'),
    };

    protected readonly valueVariants: ReadonlyArray<ReadonlyArray<[TuiDay, number]>> = [
        new Array(91)
            .fill(0)
            .reduce<
                ReadonlyArray<[TuiDay, number]>
            >((array, _, i) => [...array, [new TuiDay(2020, 0, 1).append({day: i}), (i ? array[i - 1][1] : 100) + Math.random() * 20 - 10]], []),
        [
            [new TuiDay(2020, 1, 10), 10],
            [new TuiDay(2020, 1, 15), 150],
            [new TuiDay(2020, 1, 17), 10],
            [new TuiDay(2020, 1, 20), 10],
            [new TuiDay(2020, 1, 25), 150],
            [new TuiDay(2020, 1, 27), 10],
        ],
    ];

    protected value = this.valueVariants[0];

    protected readonly labels$: Observable<readonly string[]> = this.months$.pipe(
        map(months => Array.from({length: 3}, (_, i) => months[i])),
    );

    protected readonly yStringifyVariants: ReadonlyArray<TuiStringHandler<number>> = [
        y => `${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $`,
    ];

    protected readonly xStringifyVariants$: Observable<
        ReadonlyArray<TuiStringHandler<TuiDay>>
    > = this.months$.pipe(map(months => [({month, day}) => `${months[month]}, ${day}`]));

    protected readonly hintContentVariants$: Observable<
        ReadonlyArray<PolymorpheusContent<TuiContext<[TuiDay, number]>>>
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

    protected yStringify: TuiStringHandler<number> | null = null;

    protected xStringify: TuiStringHandler<TuiDay> | null = null;

    protected hintContent: PolymorpheusContent<TuiContext<[TuiDay, number]>> = '';

    protected dots = false;

    protected smoothingFactor = 0;

    protected y = 0;

    protected height = 200;
}
