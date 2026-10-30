# CalendarRange

- **Package**: `KIT`
- **Type**: components

Component for choosing date range in calendar

### Example

```html
<tui-calendar-range [defaultViewedMonth]="defaultViewedMonth" [disabledItemHandler]="disabledItemHandler" [items]="items" [markerHandler]="markerHandler" [max]="max" [maxLength]="maxLength" [min]="min" [minLength]="minLength" [(month)]="month" (valueChange)="documentationPropertyRangeChange.emitEvent($event)" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [defaultViewedMonth] | `TuiMonth` | default month to show |
| [disabledItemHandler] | `TuiBooleanHandler<TuiDay>` |  |
| [items] | `TuiDayRangePeriod[]` | fixed intervals (shows 2 calendars with empty array) |
| [markerHandler] | `TuiMarkerHandler \| null` | a handler that gets date and returns null or a tuple with circled marker colors |
| [min] | `TuiDay \| null` | min date |
| [max] | `TuiDay \| null` | max date |
| [(month)] | `TuiMonth` | currently viewed month, also updated when a year is picked |
| [minLength] | `TuiDayLike \| null` | minimal length of range |
| [maxLength] | `TuiDayLike \| null` | maximal length of range |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (rangeChange) | `TuiDayRange` | selected date range |

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
<tui-calendar-range [(value)]="value" /> {{ value | json }}
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiCalendarRange} from '@taiga-ui/kit';

@Component({
    imports: [JsonPipe, TuiCalendarRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = new TuiDayRange(new TuiDay(2019, 2, 11), new TuiDay(2019, 2, 14));
}
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
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDayOfWeek} from '@taiga-ui/cdk';
import {tuiCalendarOptionsProvider} from '@taiga-ui/core';
import {TuiCalendarRange} from '@taiga-ui/kit';

@Component({
    selector: 'example-4',
    imports: [TuiCalendarRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiCalendarOptionsProvider({weekStart: signal(TuiDayOfWeek.Sunday)})],
})
export default class Example {}
```

#### With another range switcher

**Template:**
```html
<tui-calendar-range [items]="items" [value]="value" [(item)]="selected" (valueChange)="onValue($event)" /> @if (isLastVisible) { <p>
<button tuiLink type="button" (click)="reset()" > Reset </button>
</p> } @if (isSelected && !isDefault) { <p> You are seeing {{ selected }}. @if (!isLastVisible) { <button tuiLink type="button" (click)="toggle()" > Switch to {{ opposite }} </button> } </p> }
```

**TypeScript:**
```ts
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
    imports: [TuiCalendarRange, TuiLink],
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
