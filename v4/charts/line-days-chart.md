# LineDaysChart

- **Package**: `ADDON-CHARTS`
- **Type**: components

Line chart but for days

### How to Use (Import)

```ts
import {TuiLineDaysChart} from '@taiga-ui/addon-charts';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiLineDaysChart,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-line-days-chart
  [y]="0"
  [height]="100"
  [value]="value"
></tui-line-days-chart>
```

### Example

```html
<tui-axes class="axes" [axisXLabels]="labels()" [horizontalLines]="4" [verticalLines]="3" >
<tui-line-days-chart [dots]="dots" [height]="height" [hintContent]="hintContent" [smoothingFactor]="smoothingFactor" [value]="value" [xStringify]="xStringify" [y]="y" [yStringify]="yStringify" />
</tui-axes>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [dots] | `boolean` | Show dots on chart |
| [hintContent] | `PolymorpheusContent` |  |
| [height] | `number` | Axis Y range, pixel scale is 1:1 |
| [y] | `number` | Start of Y axis |
| [smoothingFactor] | `number` | Smoothing factor from 0 to 99 |
| [value] | `[TuiDay, number][]` | Array of data |
| [xStringify] | `TuiStringHandler<TuiDay> | null` | Function to stringify a value number to a string in axis X hint |
| [yStringify] | `TuiStringHandler<number> | null` | Function to stringify a value number to a string in axis Y hint |

### Usage Examples

#### Basic

**Template:**
```html
<p>
<tui-input-date-range [maxLength]="maxLength" [(ngModel)]="range" > Range </tui-input-date-range>
</p>
<tui-axes *ngIf="computeLabels$(range) | async as labels" class="axes" [axisXLabels]="labels" [horizontalLines]="4" [verticalLines]="labels.length - 1" >
<tui-line-days-chart class="chart" [height]="200" [value]="value" [xStringify]="xStringify$ | async" [yStringify]="yStringify" />
</tui-axes>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiLineDaysChart} from '@taiga-ui/addon-charts';
import {
    TUI_IS_E2E,
    TuiDay,
    type TuiDayLike,
    TuiDayRange,
    TuiMonth,
    tuiPure,
    type TuiStringHandler,
} from '@taiga-ui/cdk';
import {TUI_MONTHS} from '@taiga-ui/core';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';
import {map, type Observable} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgIf,
        TuiAxes,
        TuiInputDateRangeModule,
        TuiLineDaysChart,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly isE2E = inject(TUI_IS_E2E);
    private readonly months$ = inject(TUI_MONTHS);

    protected range = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1}),
    );

    protected readonly maxLength: TuiDayLike = {month: 12};

    protected readonly xStringify$: Observable<TuiStringHandler<TuiDay>> =
        this.months$.pipe(
            map(
                (months) =>
                    ({month, day}) =>
                        `${months[month]}, ${day}`,
            ),
        );

    protected get value(): ReadonlyArray<[TuiDay, number]> {
        return this.computeValue(this.range);
    }

    @tuiPure
    protected computeLabels$({
        from,
        to,
    }: TuiDayRange): Observable<ReadonlyArray<string | null>> {
        return this.months$.pipe(
            map((months) => [
                ...Array.from(
                    {length: TuiMonth.lengthBetween(from, to) + 1},
                    (_, i) => months[from.append({month: i}).month] ?? '',
                ),
                null,
            ]),
        );
    }

    protected readonly yStringify: TuiStringHandler<number> = (y) =>
        `${(10 * y).toLocaleString('en-US', {maximumFractionDigits: 0})} $`;

    @tuiPure
    private computeValue({from, to}: TuiDayRange): ReadonlyArray<[TuiDay, number]> {
        return new Array(TuiDay.lengthBetween(from, to) + 1)
            .fill(0)
            .reduce<
                ReadonlyArray<[TuiDay, number]>
            >((array, _, i) => [...array, [from.append({day: i}), this.isE2E ? 100 : (i ? (array[i - 1]?.[1] ?? 0) : 100) + Math.random() * 10 - 5]], []);
    }
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
<tui-notification>
<code>TuiLineDaysChart</code> is used to show data of several months to simplify working with different number of days in months </tui-notification>
<p class="controls">
<tui-input-date-range [maxLength]="maxLength" [(ngModel)]="data" (ngModelChange)="onDataChange($event)" > Data </tui-input-date-range>
<tui-input-date-range class="tui-space_left-4" [maxLength]="maxLength" [(ngModel)]="show" > Visible range </tui-input-date-range>
</p>
<p class="legend">
<span *ngFor="let chart of days; let index = index" class="item" >
<small class="name">Chart {{ index + 1 }}</small>
</span>
</p>
<tui-axes *ngIf="labels(show) | async as labels" class="axes" [axisXLabels]="labels" [horizontalLines]="4" [tuiLineChartHint]="hint" [verticalLines]="labels.length - 1" >
<ng-container *ngIf="getWidth(show) > 90; else line">
<tui-line-days-chart *ngFor="let chart of days" class="chart" [height]="200" [value]="chart | tuiFilter: filter : range" />
</ng-container>
<ng-template #line>
<tui-line-chart *ngFor="let chart of days" class="chart" [height]="200" [value]="chart | tuiFilter: filter : range | tuiMapper: toNumbers : range" [width]="getWidth(range)" />
</ng-template>
</tui-axes>
<ng-template #hint let-data >
<div class="tui-space_bottom-2">
<strong>{{ getDate(data[0][0], range.from) }}</strong>
</div>
<div>
<div *ngFor="let point of data" class="item" >
<span class="value">${{ point[1].toFixed(0) }}</span>
</div>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChart,
    TuiLineDaysChartHint,
} from '@taiga-ui/addon-charts';
import {
    TUI_IS_E2E,
    TuiDay,
    type TuiDayLike,
    TuiDayRange,
    TuiFilterPipe,
    type TuiMapper,
    TuiMapperPipe,
    type TuiMatcher,
    TuiMonth,
    tuiPure,
} from '@taiga-ui/cdk';
import {TUI_MONTHS, TuiNotification, type TuiPoint} from '@taiga-ui/core';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';
import {map, type Observable, of} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        NgIf,
        TuiAxes,
        TuiFilterPipe,
        TuiInputDateRangeModule,
        TuiLineChart,
        TuiLineDaysChart,
        TuiLineDaysChartHint,
        TuiMapperPipe,
        TuiNotification,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Example {
    private readonly isE2E = inject(TUI_IS_E2E);
    private readonly months$ = inject(TUI_MONTHS);

    protected data = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({month: 5}),
    );

    protected show = this.data;

    protected days = this.random(this.data);

    protected readonly maxLength: TuiDayLike = {month: 6};

    protected get range(): TuiDayRange {
        return this.computeRange(this.show);
    }

    @tuiPure
    protected getWidth({from, to}: TuiDayRange): number {
        return TuiDay.lengthBetween(from, to);
    }

    @tuiPure
    protected getDate(day: TuiDay | number, date: TuiDay): TuiDay {
        return day instanceof TuiDay ? day : date.append({day});
    }

    @tuiPure
    protected labels({from, to}: TuiDayRange): Observable<readonly string[]> {
        const length = TuiDay.lengthBetween(from, to);

        if (length > 90) {
            return this.months$.pipe(
                map((months) => [
                    ...Array.from(
                        {length: TuiMonth.lengthBetween(from, to) + 1},
                        (_, i) => months[from.append({month: i}).month] ?? '',
                    ),
                    '',
                ]),
            );
        }

        const range = Array.from({length}, (_, day) => from.append({day}));
        const mondays = onlyMondays(range);
        const days = range.map(String);

        if (length > 60) {
            return of([...even(mondays), '']);
        }

        if (length > 14) {
            return of([...mondays, '']);
        }

        if (length > 7) {
            return of([...even(days), '']);
        }

        return of([...days, '']);
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

    protected onDataChange(data: TuiDayRange): void {
        this.days = this.random(data);
    }

    @tuiPure
    private computeRange(range: TuiDayRange): TuiDayRange {
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

        if (length > 14) {
            return new TuiDayRange(mondayFrom, mondayTo);
        }

        return new TuiDayRange(from, to.append({day: length % 2}));
    }

    @tuiPure
    private generateRandomData(
        {from, to}: TuiDayRange,
        initial: number,
    ): ReadonlyArray<[TuiDay, number]> {
        return new Array(TuiDay.lengthBetween(from, to) + 1)
            .fill(0)
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
@import '@taiga-ui/core/styles/taiga-ui-local';

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

    tui-input-date-range {
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
