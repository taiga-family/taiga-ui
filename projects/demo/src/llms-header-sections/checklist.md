# Code Generation Checklist

> **Before returning ANY generated Angular component code, verify ALL items below:**

## ✅ Mandatory Checks

### 1. Imports from Correct Packages

- [ ] All `Tui*` components imported from correct package (see Import Map)
- [ ] Check: `TuiButton`, `TuiIcon`, `TuiDropdown` → `@taiga-ui/core`
- [ ] Check: `TuiAvatar`, `TuiCheckbox`, `TuiCalendar` → `@taiga-ui/kit`
- [ ] Check: `TuiDay`, `TuiMonth`, `TuiDayRange` → `@taiga-ui/cdk`

### 2. Structural Directives

- [ ] If template uses `*tuiDropdown` → import `TuiDropdown` directive
- [ ] If template uses `*ngIf` → import `NgIf` from `@angular/common` OR use `@if` (Angular 17+)
- [ ] If template uses `*ngFor` → import `NgFor` OR use `@for`
- [ ] All structural directives are in `@Component.imports` array

### 3. Angular Forms

- [ ] If template uses `[(ngModel)]` → import `FormsModule` from `@angular/forms`
- [ ] If using reactive forms → import `ReactiveFormsModule`, `FormControl`, `FormGroup`

### 4. CDK Types

- [ ] If using `TuiDay`, `TuiMonth`, `TuiTime`, `TuiYear` → import from `@taiga-ui/cdk`
- [ ] If using `TuiDayRange` → import from `@taiga-ui/cdk`
- [ ] All type definitions are in imports section

### 5. Template Expression Rules

- [ ] NO arrow functions in templates: `{{ items.map(i => i.name) }}` ❌
- [ ] Use methods or getters instead: `{{ getItemNames() }}` ✅
- [ ] NO complex logic in templates - move to component class

### 6. Null Safety

- [ ] Check for `null`/`undefined` before calling methods
- [ ] Use optional chaining: `{{ selectedDate?.toString() }}` ✅
- [ ] OR use null checks: `*ngIf="selectedDate"` then `{{ selectedDate.toString() }}`

### 7. Output Events

- [ ] Event handler parameters have correct types
- [ ] Example: `(rangeChange)="onRangeChange($event)"` where `$event` is `TuiDayRange`
- [ ] NOT `Event` type from DOM

### 8. Component Standalone Setup

```typescript
@Component({
  standalone: true,  // ✓ Required for modern Angular
  selector: 'app-example',
  imports: [
    // All used components, directives, pipes, modules
    TuiRoot,
    TuiButton,
    FormsModule,  // if using [(ngModel)]
    NgIf,         // if using *ngIf (or use @if control flow)
  ],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.less'],
})
```

### 9. Common Patterns to Avoid

- [ ] NO `import {TuiButton} from '@taiga-ui/kit'` - it's in `core`
- [ ] NO `import {TuiOption} from '@taiga-ui/kit'` - it doesn't exist (use `TuiDataList` + template)
- [ ] NO `@demo/emulate/change-detection` - use `ChangeDetectionStrategy.OnPush`
- [ ] NO missing `CommonModule` or `NgIf`/`NgFor` when using `*ng...` directives

---

## Quick Reference: Template Syntax

### ❌ Wrong - Arrow Functions

```html
{{ items.map(x => x.name).join(', ') }}
```

### ✅ Correct - Component Method

```typescript
// Component class
get itemNames(): string {
  return this.items.map(x => x.name).join(', ');
}
```

```html
<!-- Template -->
{{ itemNames }}
```

---

### ❌ Wrong - Missing Null Check

```html
{{ selectedDate.toString() }}
<!-- Error if selectedDate is null -->
```

### ✅ Correct - With Null Check

```html
{{ selectedDate?.toString() }}
<!-- OR -->
@if (selectedDate) { {{ selectedDate.toString() }} }
```

---

### ❌ Wrong - Wrong Event Type

```typescript
onRangeChange(event: Event): void {  // Wrong type!
  console.log(event);
}
```

### ✅ Correct - Proper Event Type

```typescript
import {TuiDayRange} from '@taiga-ui/cdk';

onRangeChange(range: TuiDayRange): void {  // Correct type
  console.log(range.from, range.to);
}
```

---

## Final Validation

Before submitting generated code:

1. ✓ Compiles without TypeScript errors
2. ✓ All imports are from correct packages
3. ✓ No missing dependencies (FormsModule, NgIf, etc.)
4. ✓ Template follows Angular rules (no arrow functions)
5. ✓ All types are properly imported
6. ✓ Event handlers have correct parameter types
