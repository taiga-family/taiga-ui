# CDK Types Reference

> **Critical**: These types must be imported from `@taiga-ui/cdk` when used.

---

## TuiDay

Immutable class representing a calendar date (without time).

### Import

```typescript
import {TuiDay} from '@taiga-ui/cdk';
```

### Creation

```typescript
// Current date in local timezone
const today = TuiDay.currentLocal();

// Current date in UTC
const todayUtc = TuiDay.currentUtc();

// Specific date (year, month (0-based), day)
const date = new TuiDay(2024, 0, 15); // January 15, 2024

// From native Date object
const fromDate = TuiDay.fromLocalNativeDate(new Date());

// From JSON string "2024-01-15"
const fromJson = TuiDay.jsonParse('2024-01-15');
```

### Common Methods

```typescript
const day = new TuiDay(2024, 0, 15);

// Convert to string
day.toString(); // "15.01.2024"
day.toString('YMD', '.'); // "2024.01.15"
day.getFormattedDay('en', 'short'); // "Jan 15, 2024"

// Convert to Date
const nativeDate = day.toLocalNativeDate();

// Arithmetic
const tomorrow = day.append({day: 1});
const nextMonth = day.append({month: 1});
const lastWeek = day.append({day: -7});

// Comparison
day.daySame(otherDay); // Same day?
day.dayBefore(otherDay); // Is before?
day.dayAfter(otherDay); // Is after?
day.dayLimit(minDay, maxDay); // Clamp to range

// Get day of week (0 = Monday, 6 = Sunday)
const dayOfWeek = day.dayOfWeek();
```

### Usage Example

```typescript
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiCalendar} from '@taiga-ui/kit';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TuiCalendar, FormsModule],
  template: `
    <tui-calendar
      [(ngModel)]="selectedDate"
      [min]="minDate"
      [max]="maxDate"
    />
  `,
})
export class Example {
  selectedDate: TuiDay = TuiDay.currentLocal();
  minDate: TuiDay = TuiDay.currentLocal().append({month: -1});
  maxDate: TuiDay = TuiDay.currentLocal().append({month: 1});
}
```

---

## TuiMonth

Immutable class representing a month and year.

### Import

```typescript
import {TuiMonth} from '@taiga-ui/cdk';
```

### Creation

```typescript
// Current month in local timezone
const thisMonth = TuiMonth.currentLocal();

// Specific month (year, month (0-based))
const month = new TuiMonth(2024, 0); // January 2024

// Length of the month
const daysInMonth = month.daysCount; // 31 for January
```

### Common Methods

```typescript
const month = new TuiMonth(2024, 0);

// Convert to string
month.toString(); // "January 2024" (localized)
month.formattedMonth('en', 'short'); // "Jan 2024"

// Arithmetic
const nextMonth = month.append({month: 1});
const lastYear = month.append({year: -1});

// Comparison
month.monthSame(otherMonth);
month.monthBefore(otherMonth);
month.monthAfter(otherMonth);
```

### Usage Example

```typescript
import {Component} from '@angular/core';
import {TuiMonth} from '@taiga-ui/cdk';
import {TuiCalendarMonth} from '@taiga-ui/kit';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TuiCalendarMonth],
  template: `
    <tui-calendar-month [(ngModel)]="selectedMonth" />
  `,
})
export class Example {
  selectedMonth: TuiMonth = TuiMonth.currentLocal();
}
```

---

## TuiYear

Immutable class representing a year.

### Import

```typescript
import {TuiYear} from '@taiga-ui/cdk';
```

### Creation

```typescript
const year = new TuiYear(2024);

// Check if leap year
const isLeap = year.isLeapYear; // boolean
```

---

## TuiTime

Immutable class representing time (hours, minutes, seconds, milliseconds).

### Import

```typescript
import {TuiTime} from '@taiga-ui/cdk';
```

### Creation

```typescript
// Current time
const now = TuiTime.currentLocal();

// Specific time (hours, minutes, seconds, milliseconds)
const time = new TuiTime(14, 30, 0, 0); // 14:30:00

// From string "HH:MM"
const parsed = TuiTime.fromString('14:30');
```

### Common Methods

```typescript
const time = new TuiTime(14, 30, 0, 0);

// Convert to string
time.toString(); // "14:30"
time.toString('HH:MM:SS'); // "14:30:00"

// Convert to milliseconds since midnight
const ms = time.toAbsoluteMilliseconds(); // 52200000
```

### Usage Example

```typescript
import {Component} from '@angular/core';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiInputTime} from '@taiga-ui/kit';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TuiInputTime, FormsModule],
  template: `
    <tui-input-time [(ngModel)]="selectedTime" />
  `,
})
export class Example {
  selectedTime: TuiTime = new TuiTime(12, 0);
}
```

---

## TuiDayRange

Immutable class representing a date range (from-to).

### Import

```typescript
import {TuiDayRange} from '@taiga-ui/cdk';
```

### Creation

```typescript
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';

// Create range
const start = new TuiDay(2024, 0, 1);
const end = new TuiDay(2024, 0, 31);
const range = new TuiDayRange(start, end);

// Sort automatically (start always before end)
const reversed = new TuiDayRange(end, start); // Same as above
```

### Properties

```typescript
const range = new TuiDayRange(start, end);

// Access dates
range.from; // TuiDay (start)
range.to; // TuiDay (end)

// Check if single day
range.isSingleDay; // boolean

// Calculate length
range.daysCount(); // Number of days in range
```

### Common Methods

```typescript
// Check if day is in range
range.dayLimit(day); // Clamps day to range

// Compare ranges
range.daySame(otherRange); // Exact same range?

// Human-readable format
range.toString(); // "01.01.2024 - 31.01.2024"
range.getFormattedDayRange('en', 'short'); // "Jan 1 - 31, 2024"
```

### Usage Example

```typescript
import {Component} from '@angular/core';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiCalendarRange} from '@taiga-ui/kit';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TuiCalendarRange, FormsModule],
  template: `
    <tui-calendar-range
      [(ngModel)]="selectedRange"
      (ngModelChange)="onRangeChange($event)"
    />

    @if (selectedRange) {
      <p>From: {{ selectedRange.from.toString() }}</p>
      <p>To: {{ selectedRange.to.toString() }}</p>
      <p>Days: {{ selectedRange.daysCount() }}</p>
    }
  `,
})
export class Example {
  selectedRange: TuiDayRange | null = null;

  onRangeChange(range: TuiDayRange): void {
    console.log('Selected range:', range.from, 'to', range.to);
    console.log('Number of days:', range.daysCount());
  }
}
```

---

## TuiDayRangePeriod

Predefined range preset with label.

### Import

```typescript
import {TuiDayRangePeriod} from '@taiga-ui/kit'; // Note: KIT, not CDK
```

### Creation

```typescript
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiDayRangePeriod} from '@taiga-ui/kit';

const today = TuiDay.currentLocal();
const weekRange = new TuiDayRange(today.append({day: -7}), today);

const preset = new TuiDayRangePeriod(weekRange, 'Last 7 days');
```

### Usage Example - Preset Ranges

```typescript
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiCalendarRange, TuiDayRangePeriod} from '@taiga-ui/kit';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [TuiCalendarRange, FormsModule],
  template: `
    <tui-calendar-range
      [(ngModel)]="selectedRange"
      [items]="presets"
    />
  `,
})
export class Example {
  selectedRange: TuiDayRange | null = null;

  readonly presets: readonly TuiDayRangePeriod[] = [
    new TuiDayRangePeriod(
      new TuiDayRange(TuiDay.currentLocal().append({day: -7}), TuiDay.currentLocal()),
      'Last 7 days',
    ),
    new TuiDayRangePeriod(
      new TuiDayRange(TuiDay.currentLocal().append({month: -1}), TuiDay.currentLocal()),
      'Last month',
    ),
  ];
}
```

---

## Common Mistakes & Solutions

### ❌ Not Importing Types

```typescript
// ERROR: TuiDay is not imported
const date = TuiDay.currentLocal();
```

✅ **Solution:**

```typescript
import {TuiDay} from '@taiga-ui/cdk';

const date = TuiDay.currentLocal();
```

---

### ❌ Using number for year/month

```typescript
// ERROR: Type 'number' is not assignable to type 'TuiMonth'
protected year = 2024;
protected month = this.year.append({month: 1});  // Won't work!
```

✅ **Solution:**

```typescript
import {TuiMonth, TuiYear} from '@taiga-ui/cdk';

protected year = new TuiYear(2024);
protected month = new TuiMonth(2024, 0);
protected nextMonth = this.month.append({month: 1});
```

---

### ❌ Wrong Event Parameter Type

```typescript
// ERROR: Event is not assignable to TuiDayRange
onRangeChange(event: Event): void {
  console.log(event);  // Wrong type!
}
```

✅ **Solution:**

```typescript
import {TuiDayRange} from '@taiga-ui/cdk';

onRangeChange(range: TuiDayRange): void {
  console.log(range.from, range.to);  // Correct!
}
```

---

### ❌ Accessing Private Properties

```typescript
// ERROR: Property 'name' is private
const periodName = period.name;
```

✅ **Solution:**

```typescript
// TuiDayRangePeriod properties are readonly
const range = period.range; // TuiDayRange
// Access name via toString() or display in template
```

---

## Quick Reference Table

| Type                | Package         | Purpose                 | Common Methods                                          |
| ------------------- | --------------- | ----------------------- | ------------------------------------------------------- |
| `TuiDay`            | `@taiga-ui/cdk` | Calendar date (no time) | `currentLocal()`, `toString()`, `append()`, `daySame()` |
| `TuiMonth`          | `@taiga-ui/cdk` | Month and year          | `currentLocal()`, `append()`, `monthSame()`             |
| `TuiYear`           | `@taiga-ui/cdk` | Year only               | `new TuiYear(2024)`, `isLeapYear`                       |
| `TuiTime`           | `@taiga-ui/cdk` | Time (HH:MM:SS)         | `currentLocal()`, `toString()`, `fromString()`          |
| `TuiDayRange`       | `@taiga-ui/cdk` | Date range (from-to)    | `daysCount()`, `daySame()`, `isSingleDay`               |
| `TuiDayRangePeriod` | `@taiga-ui/kit` | Range preset with label | `new TuiDayRangePeriod(range, 'Label')`                 |
