# Code Generation Checklist

> **Before returning ANY generated Angular component code, verify ALL items below.**

## Imports

- All `Tui*` symbols imported from the correct package (see **Import Map** section above)
- `FormsModule` imported if template uses `[(ngModel)]`
- `ReactiveFormsModule` imported if using `FormControl` / `FormGroup`
- All used components, directives, and pipes listed in `@Component.imports` array

## Template Rules

- No arrow functions in template expressions — move logic to component class (getters / methods)
- No complex expressions in templates — keep templates simple, delegate to TypeScript
- Null safety: use `?.` optional chaining or `@if` / `*ngIf` guards before accessing nullable values

## Event Handlers

- Event handler parameters use the correct Taiga UI type (e.g. `TuiDay`, `TuiDayRange`), not DOM `Event`
- Check the component's **API - Outputs** section for the exact emitted type

## CDK Types

- Date/time values use Taiga UI CDK types (`TuiDay`, `TuiMonth`, `TuiTime`, etc.), not native `Date` or plain numbers
- CDK types imported from `@taiga-ui/cdk` (see **CDK Types Reference** section)

## Component Setup

- `changeDetection: ChangeDetectionStrategy.OnPush` is set
- Do NOT copy `@demo/emulate/*` imports from demo code — use standard Angular APIs instead
- Verify component properties exist in the API documentation before using them
