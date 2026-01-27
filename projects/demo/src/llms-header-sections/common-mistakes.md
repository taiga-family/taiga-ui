# Common Angular & Taiga UI Mistakes

> **Learn from common errors to write correct code from the start.**

This section documents the most frequent mistakes developers make when using Taiga UI with Angular. Each mistake
includes the error message, incorrect code, and the correct solution.

---

## 1. Template Expression Errors

### ❌ Arrow Functions in Templates (NG5002)

**Error:**

```text
NG5002: Parser Error: Bindings cannot contain assignments at column X
```

**Incorrect:**

```html
<p>{{ multiValue.map(u => u.name).join(', ') }}</p>
<p>{{ items.filter(x => x.active) }}</p>
```

**Why it fails:** Angular templates don't support arrow functions or complex JavaScript expressions.

**✅ Correct Solution:**

```typescript
// Component class
get selectedUserNames(): string {
  return this.multiValue.map(u => u.name).join(', ');
}

get activeItems(): Item[] {
  return this.items.filter(x => x.active);
}
```

```html
<!-- Template -->
<p>{{ selectedUserNames }}</p>
<p>{{ activeItems }}</p>
```

---

## 2. Missing FormsModule (NG8002)

### ❌ Using `[(ngModel)]` without FormsModule

**Error:**

```text
NG8002: Can't bind to 'ngModel' since it isn't a known property of 'input'
```

**Incorrect:**

```typescript
@Component({
  standalone: true,
  imports: [TuiTextfield],  // Missing FormsModule!
  template: '<input tuiTextfield [(ngModel)]="value" />',
})
```

**✅ Correct Solution:**

```typescript
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule, TuiTextfield],  // ✓ FormsModule added
  template: '<input tuiTextfield [(ngModel)]="value" />',
})
```

---

## 3. Structural Directive Not Imported (NG8116)

### ❌ Using \*tuiDropdown without importing directive

**Error:**

```text
NG8116: A structural directive `tuiDropdown` was used in the template
without a corresponding import in the component.
```

**Incorrect:**

```typescript
@Component({
  imports: [TuiButton, TuiDataList],  // Missing TuiDropdown!
  template: `
    <button *tuiDropdown>Click</button>
    <tui-data-list *tuiDropdown>...</tui-data-list>
  `,
})
```

**✅ Correct Solution:**

```typescript
import {TuiDropdown} from '@taiga-ui/core';

@Component({
  imports: [TuiButton, TuiDataList, TuiDropdown],  // ✓ Added
  template: `
    <button *tuiDropdown>Click</button>
    <tui-data-list *tuiDropdown>...</tui-data-list>
  `,
})
```

**Common structural directives:**

- `*tuiDropdown` → `TuiDropdown` from `@taiga-ui/core`
- `*tuiActionBar` → `TuiActionBar` from `@taiga-ui/kit`
- `*tuiLet` → `TuiLet` from `@taiga-ui/cdk`
- `*ngIf` → `NgIf` from `@angular/common` (or use `@if` in Angular 17+)
- `*ngFor` → `NgFor` from `@angular/common` (or use `@for`)

---

## 4. Null Safety Errors (TS2531)

### ❌ Calling methods on possibly null values

**Error:**

```text
TS2531: Object is possibly 'null'
```

**Incorrect:**

```html
<div>Selected: {{ selectedDate.toString() }}</div>
```

```typescript
protected selectedDate: TuiDay | null = null;
```

**✅ Correct Solution 1 - Optional Chaining:**

```html
<div>Selected: {{ selectedDate?.toString() }}</div>
```

**✅ Correct Solution 2 - Conditional Rendering:**

```html
@if (selectedDate) {
<div>Selected: {{ selectedDate.toString() }}</div>
}

<!-- OR with *ngIf -->
<div *ngIf="selectedDate">Selected: {{ selectedDate.toString() }}</div>
```

---

## 5. Wrong Event Parameter Type (TS2345)

### ❌ Using generic Event instead of specific type

**Error:**

```text
TS2345: Argument of type 'Event' is not assignable to parameter of type 'TuiDayRange'
```

**Incorrect:**

```typescript
onRangeChange(event: Event): void {
  console.log(event);  // Wrong type!
}
```

```html
<tui-calendar-range (rangeChange)="onRangeChange($event)" />
```

**✅ Correct Solution:**

```typescript
import {TuiDayRange} from '@taiga-ui/cdk';

onRangeChange(range: TuiDayRange): void {
  console.log(range.from, range.to);  // Correct!
}
```

**Common event types:**

- `(rangeChange)` → `TuiDayRange`
- `(monthChange)` → `TuiMonth`
- `(dayChange)` → `TuiDay`
- `(valueChange)` → depends on component (string, number, etc.)

---

## 6. Type Errors with CDK Classes (TS2304, TS2322)

### ❌ Not importing or incorrectly using CDK types

**Error:**

```text
TS2304: Cannot find name 'TuiMonth'
TS2322: Type 'number' is not assignable to type 'TuiYear'
```

**Incorrect:**

```typescript
protected year = 2024;  // number, not TuiYear!
protected month = this.year.append({month: 1});  // Error!
```

**✅ Correct Solution:**

```typescript
import {TuiMonth, TuiYear} from '@taiga-ui/cdk';

protected year = new TuiYear(2024);  // ✓ TuiYear instance
protected month = new TuiMonth(2024, 0);  // ✓ TuiMonth instance
protected nextMonth = this.month.append({month: 1});  // ✓ Works!
```

---

## 7. Wrong Import Package (TS2305, TS2724)

### ❌ Importing from wrong package

**Error:**

```text
TS2305: Module '@taiga-ui/kit' has no exported member 'TuiButton'
TS2724: '@taiga-ui/kit' has no exported member named 'TuiOption'. Did you mean 'TuiPin'?
```

**Incorrect:**

```typescript
import {TuiButton} from '@taiga-ui/kit'; // Wrong package!
import {TuiOption} from '@taiga-ui/kit'; // Doesn't exist!
import {TuiDayRangePeriod} from '@taiga-ui/cdk'; // Wrong package!
```

**✅ Correct Solution:**

```typescript
import {TuiButton} from '@taiga-ui/core'; // ✓ Correct
import {TuiOption} from '@taiga-ui/core'; // ✓ Correct
import {TuiDayRangePeriod} from '@taiga-ui/kit'; // ✓ Correct
```

**Quick reference:**

- UI Components (Button, Icon, Dropdown) → `@taiga-ui/core`
- Form Controls (Calendar, Checkbox, Input) → `@taiga-ui/kit`
- Date/Time Types (TuiDay, TuiMonth, TuiTime) → `@taiga-ui/cdk`
- Layout Components (AppBar, Cell) → `@taiga-ui/layout`

See **Import Map** section above for complete reference.

---

## 8. Missing Angular Built-in Imports (NG8103)

### ❌ Using \*ngIf without importing NgIf

**Error:**

```text
NG8103: The `*ngIf` directive was used in the template, but neither
the `NgIf` directive nor the `CommonModule` was imported.
```

**Incorrect:**

```typescript
@Component({
  imports: [TuiButton],  // Missing NgIf!
  template: '<button *ngIf="show" tuiButton>Click</button>',
})
```

**✅ Correct Solution 1 - Import NgIf:**

```typescript
import {NgIf} from '@angular/common';

@Component({
  imports: [NgIf, TuiButton],
  template: '<button *ngIf="show" tuiButton>Click</button>',
})
```

**✅ Correct Solution 2 - Use Angular 17+ Control Flow:**

```typescript
@Component({
  imports: [TuiButton],  // No NgIf needed!
  template: '@if (show) { <button tuiButton>Click</button> }',
})
```

---

## 9. Non-existent Component Properties (NG8002)

### ❌ Using properties that don't exist on component

**Error:**

```text
NG8002: Can't bind to 'autoClose' since it isn't a known property of 'tui-swipe-actions'
```

**Incorrect:**

```html
<tui-swipe-actions [autoClose]="true">...</tui-swipe-actions>
```

**✅ Solution:** Check component documentation for available properties. This property may:

- Not exist in this component
- Have a different name
- Be deprecated in this version

Always refer to the **API - Inputs** section for each component.

---

## 10. Using Demo Imports in Real Code

### ❌ Copying demo imports to production code

**Incorrect:**

```typescript
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
  // ...
  changeDetection,  // Error: module not found!
  encapsulation,
})
```

**✅ Correct Solution:**

```typescript
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';

@Component({
  // ...
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
```

---

## Prevention Checklist

Before submitting code, verify:

1. ✅ No arrow functions in template expressions
2. ✅ `FormsModule` imported if using `[(ngModel)]`
3. ✅ All structural directives imported (`*ngIf`, `*tuiDropdown`, etc.)
4. ✅ Null checks or optional chaining for nullable values
5. ✅ Event handler parameters have correct types (not generic `Event`)
6. ✅ CDK types imported from `@taiga-ui/cdk`
7. ✅ Components imported from correct packages (see Import Map)
8. ✅ No `@demo/` imports in production code
9. ✅ Component properties exist (check API documentation)
10. ✅ Angular version matches control flow syntax (`@if` vs `*ngIf`)
