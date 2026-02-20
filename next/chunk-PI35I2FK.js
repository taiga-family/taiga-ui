import"./chunk-HU6DUUP4.js";var i=`import {Component, computed, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiAxes, TuiLineDaysChart} from '@taiga-ui/addon-charts';
import {type TuiContext, TuiDay, type TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_MONTHS} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [TuiAxes, TuiDemo, TuiLineDaysChart],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly months = inject(TUI_MONTHS);

    protected readonly valueVariants: ReadonlyArray<ReadonlyArray<[TuiDay, number]>> = [
        Array.from({length: 91}).reduce<ReadonlyArray<[TuiDay, number]>>(
            (array, _, i) => [
                ...array,
                [
                    new TuiDay(2020, 0, 1).append({day: i}),
                    (i ? (array[i - 1]?.[1] ?? 0) : 100) + Math.random() * 20 - 10,
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

    protected value = this.valueVariants[0]!;

    protected readonly labels = computed(() =>
        Array.from({length: 4}, (_, i) => this.months()?.[i] ?? ''),
    );

    protected readonly yStringifyVariants: ReadonlyArray<TuiStringHandler<number>> = [
        (y) => \`\${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $\`,
    ];

    protected readonly xStringifyVariants = computed(() => [
        ({month, day}: TuiDay) => \`\${this.months()?.[month]}, \${day}\`,
    ]);

    protected readonly hintContentVariants = computed(() => [
        '',
        ({$implicit}: {$implicit: [TuiDay, number]}) =>
            \`\${this.months()?.[$implicit[0].month]}, \${$implicit[0].day}\\n\${(
                10 * $implicit[1]
            ).toLocaleString('en-US', {maximumFractionDigits: 0})} $\`,
    ]);

    protected yStringify: TuiStringHandler<number> | null = null;

    protected xStringify: TuiStringHandler<TuiDay> | null = null;

    protected hintContent: PolymorpheusContent<TuiContext<[TuiDay, number]>> = '';

    protected dots = false;

    protected smoothingFactor = 0;

    protected y = 0;

    protected height = 200;
}
`;export{i as default};
