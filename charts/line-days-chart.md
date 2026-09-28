# LineDaysChart

- **Package**: `ADDON-CHARTS`
- **Type**: components

Line chart but for days

### Example

```html
<tui-axes class="axes" [axisXLabels]="labels()" [horizontalLines]="5" [verticalLines]="4" >
<tui-line-days-chart [dots]="dots" [height]="height" [hintContent]="hintContent" [smoothingFactor]="smoothingFactor" [value]="value" [xStringify]="xStringify" [y]="y" [yStringify]="yStringify" />
</tui-axes>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [dots] | `boolean` | show dots on chart |
| [hintContent] | `PolymorpheusContent` |  |
| [height] | `number` | axis Y range, pixel scale is 1:1 |
| [y] | `number` | start of Y axis |
| [smoothingFactor] | `number` | smoothing factor from 0 to 99 |
| [value] | `[TuiDay, number][]` | array of data |
| [xStringify] | `TuiStringHandler<TuiDay> \| null` | function to stringify a value number to a string in axis X hint |
| [yStringify] | `TuiStringHandler<number> \| null` | function to stringify a value number to a string in axis Y hint |

### Usage Examples

#### Basic

**Template:**
```html
<p>
<tui-textfield [tuiTextfieldCleaner]="false">
<label tuiLabel>Range</label>
<input tuiInputDateRange [maxLength]="maxLength" [(ngModel)]="range" />
<tui-calendar-range *tuiDropdown />
</tui-textfield>
</p>
<tui-axes class="axes" [axisXLabels]="labels()" [horizontalLines]="5" [verticalLines]="labels().length" >
<tui-line-days-chart class="chart" [height]="200" [value]="value()" [xStringify]="xStringify()" [yStringify]="yStringify" />
</tui-axes>
```

**TypeScript:**
```ts
import {Component, computed, inject, signal} from '@angular/core';
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
                `${this.months()[month]}, ${day}`,
    );

    protected readonly yStringify: TuiStringHandler<number> = (y) =>
        `${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $`;
}
```

**LESS:**
```less
:host {
    display: block;
    inline-size: 50rem;
}

.axes {
    block-size: 12.5rem;
    color: #bc71c9;
}
```

#### Complex

**Template:**
```html
<div tuiNotification>
<code>TuiLineDaysChart</code> is used to show data of several months to simplify working with different number of days in months </div>
<p class="controls">
<tui-textfield [tuiTextfieldCleaner]="false">
<label tuiLabel>Data</label>
<input tuiInputDateRange [maxLength]="maxLength" [(ngModel)]="data" />
<tui-calendar-range *tuiDropdown />
</tui-textfield>
<tui-textfield class="tui-space_left-4" [tuiTextfieldCleaner]="false" >
<label tuiLabel>Visible range</label>
<input tuiInputDateRange [maxLength]="maxLength" [(ngModel)]="show" />
<tui-calendar-range *tuiDropdown />
</tui-textfield>
</p>
<p class="legend"> @for (chart of days(); track chart) { <span class="item">
<small class="name">Chart {{ $index + 1 }}</small>
</span> } </p>
<tui-axes class="axes" [axisXLabels]="labels()" [horizontalLines]="5" [tuiLineChartHint]="hint" [verticalLines]="labels().length" > @if (getWidth(show()) > 90) { @for (chart of days(); track chart) { <tui-line-days-chart class="chart" [height]="200" [value]="chart | tuiFilter: filter : range()" /> } } @else { @for (chart of days(); track chart) { <tui-line-chart class="chart" [height]="200" [value]="chart | tuiFilter: filter : range() | tuiMapper: toNumbers : range()" [width]="getWidth(range())" /> } } </tui-axes>
<ng-template #hint let-data >
<div class="tui-space_bottom-2">
<strong>{{ getDate(data[0][0], range().from) }}</strong>
</div>
<div> @for (point of data; track point) { <div class="item">
<span class="value">${{ point[1].toFixed(0) }}</span>
</div> } </div>
</ng-template>
```

**TypeScript:**
```ts
import {Component, computed, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChart,
    TuiLineDaysChartHint,
} from '@taiga-ui/addon-charts';
import {
    TuiDay,
    type TuiDayLike,
    TuiDayRange,
    TuiFilterPipe,
    type TuiMapper,
    TuiMapperPipe,
    type TuiMatcher,
    TuiMonth,
} from '@taiga-ui/cdk';
import {TUI_MONTHS, TuiNotification, type TuiPoint, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAxes,
        TuiFilterPipe,
        TuiInputDateRange,
        TuiLineChart,
        TuiLineDaysChart,
        TuiLineDaysChartHint,
        TuiMapperPipe,
        TuiNotification,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    private readonly isE2E = inject(WA_IS_E2E);
    private readonly months = inject(TUI_MONTHS);

    protected readonly data = signal(
        new TuiDayRange(TuiDay.currentLocal(), TuiDay.currentLocal().append({month: 5})),
    );

    protected readonly show = signal(this.data());
    protected readonly days = computed(() => this.random(this.data()));
    protected readonly maxLength: TuiDayLike = {month: 6};

    protected readonly range = computed(() => {
        const range = this.show();
        const {from, to} = range;
        const length = TuiDay.lengthBetween(from, to);
        const dayOfWeekFrom = from.dayOfWeek();
        const dayOfWeekTo = to.dayOfWeek();
        const mondayFrom = dayOfWeekFrom ? from.append({day: 7 - dayOfWeekFrom}) : from;
        const mondayTo = dayOfWeekTo ? to.append({day: 7 - dayOfWeekTo}) : to;
        const mondaysLength = TuiDay.lengthBetween(mondayFrom, mondayTo);

        if (length > 90) {
            return range;
        }

        if (length > 60) {
            return new TuiDayRange(
                mondayFrom,
                mondayTo.append({day: mondaysLength % 14}),
            );
        }

        return length > 14
            ? new TuiDayRange(mondayFrom, mondayTo)
            : new TuiDayRange(from, to.append({day: length % 2}));
    });

    protected readonly labels = computed(() => {
        const {from, to} = this.show();
        const length = TuiDay.lengthBetween(from, to);
        const months = this.months();

        if (length > 90) {
            return [
                ...Array.from(
                    {length: TuiMonth.lengthBetween(from, to) + 1},
                    (_, i) => months[from.append({month: i}).month] ?? '',
                ),
                '',
            ];
        }

        const range = Array.from({length}, (_, day) => from.append({day}));
        const mondays = onlyMondays(range);
        const days = range.map(String);

        if (length > 60) {
            return [...even(mondays), ''];
        }

        if (length > 14) {
            return [...mondays, ''];
        }

        return length > 7 ? [...even(days), ''] : [...days, ''];
    });

    protected getWidth({from, to}: TuiDayRange): number {
        return TuiDay.lengthBetween(from, to);
    }

    protected getDate(day: TuiDay | number, date: TuiDay): TuiDay {
        return day instanceof TuiDay ? day : date.append({day});
    }

    protected readonly filter: TuiMatcher<[readonly [TuiDay, number], TuiDayRange]> = (
        [day],
        {from, to},
    ) => day.daySameOrAfter(from) && day.daySameOrBefore(to);

    protected readonly toNumbers: TuiMapper<
        [ReadonlyArray<readonly [TuiDay, number]>, TuiDayRange],
        readonly TuiPoint[]
    > = (days, {from}) =>
        days.map(([day, value]) => [TuiDay.lengthBetween(from, day), value]);

    private generateRandomData(
        {from, to}: TuiDayRange,
        initial: number,
    ): ReadonlyArray<[TuiDay, number]> {
        return Array.from({length: TuiDay.lengthBetween(from, to) + 1})
            .reduce<ReadonlyArray<[TuiDay, number]>>(
                (array, _, i) => [
                    ...array,
                    [
                        from.append({day: i}),
                        this.isE2E
                            ? initial
                            : Math.max(
                                  (i ? (array[i - 1]?.[1] ?? 0) : initial) +
                                      Math.random() * 10 -
                                      5,
                                  0,
                              ),
                    ],
                ],
                [],
            )
            .filter(([day]) => day.dayOfWeek() < 5);
    }

    private random(data: TuiDayRange): ReadonlyArray<ReadonlyArray<[TuiDay, number]>> {
        return [
            this.generateRandomData(data, 100),
            this.generateRandomData(data, 75),
            this.generateRandomData(data, 50),
        ];
    }
}

function onlyMondays(range: readonly TuiDay[]): readonly string[] {
    return range.filter((day) => !day.dayOfWeek()).map(String);
}

function even<T>(array: readonly T[]): readonly T[] {
    return array.filter((_, i) => !(i % 2));
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.color() {
    color: var(--tui-chart-categorical-01);

    &:first-child {
        color: var(--tui-chart-categorical-08);
    }

    &:last-child {
        color: var(--tui-chart-categorical-12);
    }
}

.axes {
    block-size: 12.5rem;
}

.controls {
    display: flex;

    tui-textfield {
        flex: 1;
    }
}

.legend {
    display: flex;
    justify-content: center;
    align-items: center;
}

.item {
    .color();

    display: flex;
    align-items: center;
    margin: 0 0.75rem;

    &::before {
        content: '';
        border-block-end: 0.125rem solid;
        inline-size: 1rem;
        margin-inline-end: 0.5rem;
    }
}

.name {
    color: var(--tui-text-primary);
}

.value {
    color: #fff;
}

.chart {
    .color();
    .fullsize();
}
```
