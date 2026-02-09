# CDK Types Reference

> **Critical**: Taiga UI uses its own immutable date/time types instead of native `Date`. All types below are imported
> from `@taiga-ui/cdk` (except `TuiDayRangePeriod` which is from `@taiga-ui/kit`). Always consult the **Import Map**
> section to verify the correct package.

---

## TuiDay

Immutable class representing a calendar date (without time). Month is **0-based** (0 = January).

**Creation:**

- `TuiDay.currentLocal()` — current date in local timezone
- `new TuiDay(year, month, day)` — specific date (month is 0-based)
- `TuiDay.fromLocalNativeDate(new Date())` — from native Date
- `TuiDay.jsonParse('2024-01-15')` — from ISO string

**Key methods:** `append({day, month, year})`, `toString()`, `toLocalNativeDate()`, `daySame()`, `dayBefore()`,
`dayAfter()`, `dayLimit(min, max)`, `dayOfWeek()`

## TuiMonth

Immutable class representing a month and year. Extends `TuiYear`.

**Creation:**

- `TuiMonth.currentLocal()` — current month
- `new TuiMonth(year, month)` — specific month (0-based)

**Key methods:** `append({month, year})`, `monthSame()`, `monthBefore()`, `monthAfter()`, `daysCount`

## TuiYear

Immutable class representing a year.

**Creation:** `new TuiYear(year)`

**Key properties:** `isLeapYear`

## TuiTime

Immutable class representing time (hours, minutes, seconds, milliseconds).

**Creation:**

- `TuiTime.currentLocal()` — current time
- `new TuiTime(hours, minutes, seconds, ms)` — specific time
- `TuiTime.fromString('14:30')` — from string

**Key methods:** `toString()`, `toAbsoluteMilliseconds()`

## TuiDayRange

Immutable class representing a date range (from-to). Dates are auto-sorted (start <= end).

**Creation:** `new TuiDayRange(from, to)` where `from` and `to` are `TuiDay`

**Key properties/methods:** `from`, `to`, `isSingleDay`, `daysCount()`, `daySame()`, `toString()`

## TuiDayRangePeriod

Predefined range preset with a label. Imported from `@taiga-ui/kit` (not `@taiga-ui/cdk`).

**Creation:** `new TuiDayRangePeriod(range, 'Label')` where `range` is `TuiDayRange`

---

## Common Mistakes with CDK Types

- **Using plain numbers instead of type instances:** `year = 2024` will not have `.append()`. Use `new TuiYear(2024)`.
- **Wrong event handler parameter type:** Output events emit CDK types (e.g. `TuiDay`, `TuiDayRange`), not DOM `Event`.
- **Forgetting to import:** All CDK types must be explicitly imported from `@taiga-ui/cdk`.
- **Mutating immutable objects:** These classes are immutable — methods like `append()` return new instances.

## Quick Reference

| Type                | Package         | Purpose       | Key API                                        |
| ------------------- | --------------- | ------------- | ---------------------------------------------- |
| `TuiDay`            | `@taiga-ui/cdk` | Calendar date | `currentLocal()`, `append()`, `daySame()`      |
| `TuiMonth`          | `@taiga-ui/cdk` | Month + year  | `currentLocal()`, `append()`, `daysCount`      |
| `TuiYear`           | `@taiga-ui/cdk` | Year          | `isLeapYear`                                   |
| `TuiTime`           | `@taiga-ui/cdk` | Time          | `currentLocal()`, `fromString()`, `toString()` |
| `TuiDayRange`       | `@taiga-ui/cdk` | Date range    | `from`, `to`, `daysCount()`, `isSingleDay`     |
| `TuiDayRangePeriod` | `@taiga-ui/kit` | Range preset  | constructor(range, label)                      |
