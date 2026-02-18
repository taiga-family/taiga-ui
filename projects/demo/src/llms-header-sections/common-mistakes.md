# Common Mistakes

> **These are the most frequent errors when using Taiga UI. Avoid them.**

## 1. Wrong Import Package

The #1 cause of compilation errors. Always check the **Import Map** section to find the correct package for each symbol.

## 2. Arrow Functions in Templates

Angular templates do not support arrow functions in interpolation or property binding expressions. Move logic to the
component class as getters or methods.

**Wrong:** `{{ items.map(x => x.name).join(', ') }}` **Right:** Create a getter `get itemNames(): string` in the
component class and use `{{ itemNames }}` in the template.

## 3. Missing FormsModule

If using `[(ngModel)]`, you must add `FormsModule` to the component's `imports` array. For reactive forms
(`formControl`, `formGroup`), add `ReactiveFormsModule`.

## 4. Null Safety

Calling methods on potentially null values causes runtime errors. Use optional chaining (`?.`) in templates or guard
with `@if` / `*ngIf`.

## 5. Wrong Event Parameter Type

Output events from Taiga UI components emit specific types (e.g. `TuiDay`, `TuiDayRange`, `TuiMonth`), not DOM `Event`.
Check the component's **API - Outputs** section.

## 6. Using Plain Numbers for Date/Time

Taiga UI date components work with `TuiDay`, `TuiMonth`, `TuiYear`, `TuiTime` — not plain numbers or native `Date`. See
the **CDK Types Reference** section.

## 7. Copying Demo-Only Imports

Demo pages use internal imports like `@demo/emulate/change-detection`. In real code, use
`ChangeDetectionStrategy.OnPush` from `@angular/core` directly.

## 8. Missing Structural Directive Imports

When using structural directives (e.g. `*tuiDropdown`, `*tuiItem`), the corresponding directive class must be in the
component's `imports` array. Check the **Import Map** for the correct package.
