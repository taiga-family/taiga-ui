# CalendarRange

- **Package**: `KIT`
- **Type**: components

Component for choosing date range in calendar

### How to Use (Import)

```ts
import {TuiCalendarRange} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiCalendarRange,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-calendar-range />
```

### Example

```html
<tui-calendar-range [defaultViewedMonth]="defaultViewedMonth" [disabledItemHandler]="disabledItemHandler" [items]="items" [markerHandler]="markerHandler" [max]="max" [maxLength]="maxLength" [min]="min" [minLength]="minLength" (monthChange)="documentationPropertyMonthChange.emitEvent($event)" (valueChange)="documentationPropertyRangeChange.emitEvent($event)" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [defaultViewedMonth] | `TuiMonth` | Default month to show |
| [disabledItemHandler] | `TuiBooleanHandler<TuiDay>` |  |
| [items] | `TuiDayRangePeriod[]` | Fixed intervals (shows 2 calendars with empty array) |
| [markerHandler] | `TuiMarkerHandler | null` | A handler that gets date and returns null or a tuple with circled marker colors |
| [min] | `TuiDay | null` | Min date |
| [max] | `TuiDay | null` | Max date |
| [minLength] | `TuiDayLike | null` | Minimal length of range |
| [maxLength] | `TuiDayLike | null` | Maximal length of range |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (rangeChange) | `TuiDayRange` | Selected date range |
| (monthChange) | `TuiMonth` | Month changed (also emitted when a year is picked) |

### Usage Examples

#### Basic

**Template:**
```html
<tui-calendar-range />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCalendarRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCalendarRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### With value

**Template:**
```html
<tui-calendar-range />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TUI_CALENDAR_DATE_STREAM, TuiCalendarRange} from '@taiga-ui/kit';
import {of} from 'rxjs';

export const calendarStream$ = of(
    new TuiDayRange(new TuiDay(2019, 2, 11), new TuiDay(2019, 2, 14)),
);

@Component({
    standalone: true,
    imports: [TuiCalendarRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_CALENDAR_DATE_STREAM,
            useValue: calendarStream$,
        },
    ],
})
export default class Example {}
```

#### With ranges

**Template:**
```html
<tui-calendar-range [items]="items" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCalendarRange, tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCalendarRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = tuiCreateDefaultDayRangePeriods();
}
```

#### Localization

**Template:**
```html
<tui-calendar-range />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDayOfWeek} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core';
import {TuiCalendarRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCalendarRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_FIRST_DAY_OF_WEEK,
            useValue: TuiDayOfWeek.Sunday,
        },
    ],
})
export default class Example {}
```

#### With another range switcher

**Template:**
```html
<tui-calendar-range [items]="items" [value]="value" [(item)]="selected" (valueChange)="onValue($event)" />
<p *ngIf="isLastVisible">
<button tuiLink type="button" (click)="reset()" > Reset </button>
</p>
<p *ngIf="isSelected && !isDefault"> You are seeing {{ selected }}. <button *ngIf="!isLastVisible" tuiLink type="button" (click)="toggle()" > Switch to {{ opposite }} </button>
</p>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiLink} from '@taiga-ui/core';
import {TuiCalendarRange, TuiDayRangePeriod} from '@taiga-ui/kit';

const today = TuiDay.currentLocal();
const startOfWeek = today.append({day: -today.dayOfWeek()});
const startOfMonth = today.append({day: 1 - today.day});
const startOfQuarter = startOfMonth.append({month: -(startOfMonth.month % 3)});

@Component({
    standalone: true,
    imports: [NgIf, TuiCalendarRange, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        new TuiDayRangePeriod(
            new TuiDayRange(today.append({day: -30}), today),
            'Default',
        ),
        new TuiDayRangePeriod(new TuiDayRange(startOfWeek, today), 'Week'),
        new TuiDayRangePeriod(new TuiDayRange(startOfMonth, today), 'Month'),
        new TuiDayRangePeriod(new TuiDayRange(startOfQuarter, today), 'Quarter'),
    ];

    protected selected: TuiDayRangePeriod | null = this.default;
    protected value: TuiDayRange | null = this.default.range;

    public get default(): TuiDayRangePeriod {
        return this.items[0]!;
    }

    public get isDefault(): boolean {
        return this.selected === this.default;
    }

    public get isSelected(): boolean {
        return !!this.items.find((item) => item === this.selected);
    }

    public get isLastVisible(): boolean {
        return this.selected === this.items[this.items.length - 1];
    }

    public get opposite(): TuiDayRangePeriod | null {
        if (!this.isSelected) {
            return null;
        }

        switch (this.selected) {
            case this.default:
                return null;
            case this.items[1]:
                return this.items[2]!;
            case this.items[2]:
                return this.items[3]!;
            case this.items[3]:
                return null;
            default:
                return null;
        }
    }

    public onValue(value: TuiDayRange | null): void {
        this.value = value;
    }

    public reset(): void {
        this.selected = this.default;
        this.value = this.selected.range;
    }

    public toggle(): void {
        this.selected = this.opposite;
        this.value = this.selected?.range ?? null;
    }
}
```
