# Calendar

- **Package**: `CORE`
- **Type**: components

A simple calendar. If you want a textfield with date, see InputDate and InputDateRange

### Example

```html
<tui-calendar [disabledItemHandler]="disabledItemHandler" [markerHandler]="markerHandler" [max]="max" [maxViewedMonth]="maxViewedMonth" [min]="min" [minViewedMonth]="minViewedMonth" [showAdjacent]="showAdjacent" [value]="value" [(hoveredItem)]="hoveredItem" [(month)]="month" (dayClick)="documentationPropertyDayClick.emitEvent($event)" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [disabledItemHandler] | `TuiBooleanHandler<TuiDay>` |  |
| [showAdjacent] | `boolean` | show adjacent months days |
| [(hoveredItem)] | `TuiDay \| null` | hovered date |
| [markerHandler] | `TuiMarkerHandler \| null` | a handler that gets date and returns null or a tuple with circled marker colors |
| [max] | `TuiDay \| null` | maximal date to choose |
| [maxViewedMonth] | `TuiMonth \| null` | maximal month to access |
| [min] | `TuiDay \| null` | minimum date to choose |
| [minViewedMonth] | `TuiMonth \| null` | minimum month to access |
| [(month)] | `TuiMonth` | current month |
| [value] | `TuiDay \| TuiDayRange \| null` | selected day or range |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (dayClick) | `TuiDay` | date click |

### Usage Examples

#### Basic

**Template:**
```html
<tui-calendar [value]="value" (dayClick)="onDayClick($event)" /> @if (value) { <div>Chosen date: {{ value }}</div> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay} from '@taiga-ui/cdk';
import {TuiCalendar} from '@taiga-ui/core';

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;

    protected onDayClick(day: TuiDay): void {
        this.value = day;
    }
}
```

#### Range

**Template:**
```html
<div class="wrapper">
<tui-calendar [maxViewedMonth]="firstMonth" [month]="firstMonth" [showAdjacent]="false" [value]="value" [(hoveredItem)]="hoveredItem" (dayClick)="onDayClick($event)" (monthChange)="onMonthChangeFirst($event)" />
<tui-calendar [maxViewedMonth]="middleMonth" [minViewedMonth]="middleMonth" [month]="middleMonth" [showAdjacent]="false" [value]="value" [(hoveredItem)]="hoveredItem" (dayClick)="onDayClick($event)" (monthChange)="onMonthChangeMiddle($event)" />
<tui-calendar [minViewedMonth]="lastMonth" [month]="lastMonth" [showAdjacent]="false" [value]="value" [(hoveredItem)]="hoveredItem" (dayClick)="onDayClick($event)" (monthChange)="onMonthChangeLast($event)" />
</div> @if (value) { <div>Chosen dates: {{ value }}</div> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk';
import {TuiCalendar} from '@taiga-ui/core';

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDayRange | null = null;
    protected firstMonth = TuiMonth.currentLocal();
    protected middleMonth = TuiMonth.currentLocal().append({month: 1});
    protected lastMonth = TuiMonth.currentLocal().append({month: 2});
    protected hoveredItem: TuiDay | null = null;

    protected onDayClick(day: TuiDay): void {
        if (!this.value?.isSingleDay) {
            this.value = new TuiDayRange(day, day);
        }

        this.value = TuiDayRange.sort(this.value.from, day);
    }

    protected onMonthChangeFirst(month: TuiMonth): void {
        this.firstMonth = month;
        this.middleMonth = month.append({month: 1});
        this.lastMonth = month.append({month: 2});
    }

    protected onMonthChangeMiddle(month: TuiMonth): void {
        this.firstMonth = month.append({month: -1});
        this.middleMonth = month;
        this.lastMonth = month.append({month: 1});
    }

    protected onMonthChangeLast(month: TuiMonth): void {
        this.firstMonth = month.append({month: -2});
        this.middleMonth = month.append({month: -1});
        this.lastMonth = month;
    }
}
```

**LESS:**
```less
.wrapper {
    display: flex;
}
```

#### With markers

**Template:**
```html
<div class="wrapper">
<tui-calendar [markerHandler]="markerHandler" [maxViewedMonth]="firstMonth" [month]="firstMonth" [showAdjacent]="false" [value]="value" [(hoveredItem)]="hoveredItem" (dayClick)="onDayClick($event)" (monthChange)="onMonthChangeFirst($event)" />
<tui-calendar [markerHandler]="markerHandler" [maxViewedMonth]="middleMonth" [minViewedMonth]="middleMonth" [month]="middleMonth" [showAdjacent]="false" [value]="value" [(hoveredItem)]="hoveredItem" (dayClick)="onDayClick($event)" (monthChange)="onMonthChangeMiddle($event)" />
<tui-calendar [markerHandler]="markerHandler" [minViewedMonth]="lastMonth" [month]="lastMonth" [showAdjacent]="false" [value]="value" [(hoveredItem)]="hoveredItem" (dayClick)="onDayClick($event)" (monthChange)="onMonthChangeLast($event)" />
</div> @if (value) { <div>Chosen dates: {{ value }}</div> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk';
import {TuiCalendar, type TuiMarkerHandler} from '@taiga-ui/core';

const TWO_DOTS: [string, string] = [
    'var(--tui-background-accent-1)',
    'var(--tui-status-info)',
];

const ONE_DOT: [string] = ['var(--tui-status-positive)'];

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDayRange | null = null;
    protected firstMonth = TuiMonth.currentLocal();
    protected middleMonth = TuiMonth.currentLocal().append({month: 1});
    protected lastMonth = TuiMonth.currentLocal().append({month: 2});
    protected hoveredItem: TuiDay | null = null;

    protected readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>
        // Attention: do not create new arrays in handler, use constants instead
        day.day % 2 === 0 ? TWO_DOTS : ONE_DOT;

    protected onDayClick(day: TuiDay): void {
        if (!this.value?.isSingleDay) {
            this.value = new TuiDayRange(day, day);
        }

        this.value = TuiDayRange.sort(this.value.from, day);
    }

    protected onMonthChangeFirst(month: TuiMonth): void {
        this.firstMonth = month;
        this.middleMonth = month.append({month: 1});
        this.lastMonth = month.append({month: 2});
    }

    protected onMonthChangeMiddle(month: TuiMonth): void {
        this.firstMonth = month.append({month: -1});
        this.middleMonth = month;
        this.lastMonth = month.append({month: 1});
    }

    protected onMonthChangeLast(month: TuiMonth): void {
        this.firstMonth = month.append({month: -2});
        this.middleMonth = month.append({month: -1});
        this.lastMonth = month;
    }
}
```

**LESS:**
```less
.wrapper {
    display: flex;
}
```

#### Localization

**Template:**
```html
<tui-calendar [value]="value" />
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayOfWeek} from '@taiga-ui/cdk';
import {TuiCalendar, tuiCalendarOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiCalendarOptionsProvider({weekStart: signal(TuiDayOfWeek.Sunday)})],
})
export default class Example {
    protected value = new TuiDay(2025, 6, 4);
}
```

#### Color customization

**Template:**
```html
<tui-calendar />
```

**TypeScript:**
```ts
import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDay, type TuiHandler} from '@taiga-ui/cdk';
import {TuiCalendar, tuiCalendarOptionsProvider} from '@taiga-ui/core';

const dayType: TuiHandler<TuiDay, string> = (day) => {
    if (day.day === 10) {
        return 'holiday';
    }

    return day.isWeekend ? 'weekend' : 'weekday';
};

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    providers: [tuiCalendarOptionsProvider({dayType})],
})
export default class Example {}
```

**LESS:**
```less
tui-calendar-sheet [data-type='holiday']::before {
    background-color: var(--tui-chart-categorical-09);
}
```

#### Select multiple dates

**Template:**
```html
<tui-calendar [value]="value" (dayClick)="onDayClick($event)" />
<div>Chosen dates: {{ value }}</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay} from '@taiga-ui/cdk';
import {TuiCalendar} from '@taiga-ui/core';

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: readonly TuiDay[] = [];

    protected onDayClick(day: TuiDay): void {
        this.value = this.value.find((item) => item.daySame(day))
            ? this.value.filter((item) => !item.daySame(day))
            : this.value.concat(day);
    }
}
```

#### Open in year view

**Template:**
```html
<tui-calendar initialView="year" [value]="value" (dayClick)="onDayClick($event)" /> @if (value) { <div>Chosen date: {{ value }}</div> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay} from '@taiga-ui/cdk';
import {TuiCalendar} from '@taiga-ui/core';

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;

    protected onDayClick(day: TuiDay): void {
        this.value = day;
    }
}
```
