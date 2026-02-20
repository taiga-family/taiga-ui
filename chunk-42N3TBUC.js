import"./chunk-HU6DUUP4.js";var a=`import {Component, computed, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiAxes, TuiLineDaysChart} from '@taiga-ui/addon-charts';
import {
    TuiDay,
    type TuiDayLike,
    TuiDayRange,
    TuiMonth,
    type TuiStringHandler,
} from '@taiga-ui/cdk';
import {TUI_MONTHS, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiAxes, TuiInputDateRange, TuiLineDaysChart, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly isE2E = inject(WA_IS_E2E);
    private readonly months = inject(TUI_MONTHS);

    protected readonly maxLength: TuiDayLike = {month: 12};
    protected readonly range = signal(
        new TuiDayRange(TuiDay.currentLocal(), TuiDay.currentLocal().append({year: 1})),
    );

    protected readonly value = computed(({to, from} = this.range()) =>
        Array.from({length: TuiDay.lengthBetween(from, to) + 1}).reduce<
            ReadonlyArray<[TuiDay, number]>
        >(
            (array, _, i) => [
                ...array,
                [
                    from.append({day: i}),
                    this.isE2E
                        ? 100
                        : (i ? (array[i - 1]?.[1] ?? 0) : 100) + Math.random() * 10 - 5,
                ],
            ],
            [],
        ),
    );

    protected readonly labels = computed(({to, from} = this.range()) => [
        ...Array.from(
            {length: TuiMonth.lengthBetween(from, to) + 1},
            (_, i) => this.months()[from.append({month: i}).month] ?? '',
        ),
        null,
    ]);

    protected readonly xStringify = computed<TuiStringHandler<TuiDay>>(
        () =>
            ({month, day}) =>
                \`\${this.months()[month]}, \${day}\`,
    );

    protected readonly yStringify: TuiStringHandler<number> = (y) =>
        \`\${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $\`;
}
`;export{a as default};
