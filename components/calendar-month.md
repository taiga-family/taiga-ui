# CalendarMonth

- **Package**: `KIT`
- **Type**: components

Month picker component. If you want a textfield, see InputMonth

### Example

```html
<tui-calendar-month [disabledItemHandler]="disabledItemHandler" [max]="max" [maxLength]="maxLength" [min]="min" [minLength]="minLength" [value]="value" [year]="year" (monthClick)="documentationPropertyMonthClick.emitEvent($event)" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [disabledItemHandler] | `TuiBooleanHandler<TuiMonth>` |  |
| [max] | `TuiMonth | null` | maximal month |
| [min] | `TuiMonth | null` | minimal month |
| [maxLength] | `number` | maximum length |
| [minLength] | `number` | minimum length |
| [value] | `TuiMonth | TuiMonthRange | null` | a single month or a range of months |
| [(year)] | `TuiYear` | current year |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (monthClick) | `TuiMonth` | selected month |

### Usage Examples

#### Basic

**Template:**
```html
<tui-calendar-month [value]="value" (hoveredItemChange)="onMonthHovered($event)" (monthClick)="onMonthClick($event)" />
<p>Selected month: {{ value }}</p>
<p>Hovered month: {{ hoveredMonth }}</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonth} from '@taiga-ui/cdk';
import {TuiCalendarMonth} from '@taiga-ui/kit';

@Component({
    imports: [TuiCalendarMonth],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiMonth | null = null;
    protected hoveredMonth: TuiMonth | null = null;

    protected onMonthClick(month: TuiMonth): void {
        this.value = month;
    }

    protected onMonthHovered(month: TuiMonth | null): void {
        this.hoveredMonth = month;
    }
}
```

#### Range

**Template:**
```html
<tui-calendar-month [max]="max" [min]="min" [value]="value" (monthClick)="onMonthClick($event)" />
<p>Selected value: {{ value }}</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';
import {TuiCalendarMonth, tuiCalendarMonthOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [TuiCalendarMonth],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiCalendarMonthOptionsProvider({rangeMode: true})],
})
export default class Example {
    protected value: TuiMonth | TuiMonthRange | null = null;
    protected max = TuiMonth.currentLocal().append({year: 1});
    protected min = new TuiMonth(2019, 7);

    protected onMonthClick(month: TuiMonth): void {
        this.value =
            this.value instanceof TuiMonth
                ? TuiMonthRange.sort(this.value, month)
                : month;
    }
}
```
