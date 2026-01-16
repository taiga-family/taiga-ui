# AGENTS.md

Modern AI Agent Practices for Taiga UI Development

This file provides guidance for AI coding assistants (Claude Code, GitHub Copilot, Cursor, etc.) when working with this
codebase.

## Agent Operating Principles

### 1. Understanding Before Modifying

**ALWAYS read code before suggesting changes:**

- Read the actual file, don't guess at implementation
- Understand existing patterns before introducing new ones
- Check related files (tests, types, barrel exports)
- Search for similar implementations to maintain consistency

**When asked to modify a component:**

```typescript
// ❌ BAD: Suggesting changes without reading
// "Let's add a new input to TuiButton..."

// ✅ GOOD: Read first, then suggest
// 1. Read projects/core/components/button/button.directive.ts
// 2. Read projects/core/components/button/button.options.ts
// 3. Check projects/core/components/button/test/button.spec.ts
// 4. Then suggest changes matching existing patterns
```

### 2. Context Gathering Strategy

**Start broad, then narrow:**

1. **Understand the task scope** - Is this a bug fix, feature, refactor, or exploration?
2. **Identify affected packages** - Core? Kit? CDK? Multiple?
3. **Find related code** - Use Grep/Glob to discover existing patterns
4. **Read key files** - Don't read everything, focus on what's relevant
5. **Propose approach** - Before writing code, explain the plan

**Example workflow for "Add loading state to TuiButton":**

```bash
# 1. Find similar loading implementations
grep -r "loading" projects/core/ projects/kit/

# 2. Read button implementation
# Read: projects/core/components/button/button.directive.ts

# 3. Check if loading token exists
grep -r "TUI_LOADING" projects/core/tokens/

# 4. Propose: "I found TuiLoader component and TUI_LOADING_OPTIONS.
#    I'll add a loading input to TuiButton that shows TuiLoader inside button."
```

### 3. Pattern Consistency

**Match existing patterns, don't invent new ones:**

#### Component Authoring

```typescript
// ✅ GOOD: Follow existing patterns
@Directive({
  selector: '[tuiButton]',
  hostDirectives: [TuiWithAppearance, TuiWithIcons],
  host: {
    '[attr.data-size]': 'size()',
    '[attr.data-state]': 'state()',
  },
})
export class TuiButton {
  public readonly size = input(inject(TUI_BUTTON_OPTIONS).size);
  public readonly state = computed(() => (this.loading() ? 'loading' : this.disabled() ? 'disabled' : 'active'));
}

// ❌ BAD: Using old Angular patterns
@Directive({selector: '[tuiButton]'})
export class TuiButton {
  @Input() size: string = 'l'; // Old pattern, use input()
  @HostBinding('attr.data-size') get dataSize() {
    return this.size;
  } // Use host object
}
```

#### Options Pattern

```typescript
// ✅ GOOD: Use tuiCreateOptions
export const [TUI_BUTTON_OPTIONS, tuiButtonOptionsProvider] = tuiCreateOptions({
    appearance: 'primary' as const,
    size: 'l' as const,
    iconStart: '' as const,
});

// ❌ BAD: Manual token creation
export const TUI_BUTTON_OPTIONS = new InjectionToken('...');
export function provideButtonOptions(options: ButtonOptions) { ... }
```

#### Form Controls

```typescript
// ✅ GOOD: Extend TuiControl
@Directive({selector: 'input[tuiInput]'})
export class TuiInput extends TuiControl<string> {
  // Inherits: value, disabled, invalid, interactive signals
  // Inherits: onChange, onTouched, ControlValueAccessor implementation
}

// ❌ BAD: Manual ControlValueAccessor
export class TuiInput implements ControlValueAccessor {
  writeValue(value: any) {
    /* ...  */
  } // Already in TuiControl
  registerOnChange(fn: any) {
    /* ...  */
  } // Already in TuiControl
}
```

### 4. Signal-First Reactive Programming

**Use signals and computed, not manual subscriptions:**

```typescript
// ✅ GOOD: Reactive with signals
export class TuiAccordion {
  public readonly expanded = signal(false);
  public readonly icon = computed(() => (this.expanded() ? '@tui.chevron-up' : '@tui.chevron-down'));

  protected readonly toggle = effect(() => {
    this.el.classList.toggle('_expanded', this.expanded());
  });
}

// ❌ BAD: Manual subscriptions
export class TuiAccordion {
  public expanded = false;

  ngOnInit() {
    this.expandedChange.subscribe((value) => {
      this.expanded = value;
      this.updateIcon();
      this.cdr.markForCheck();
    });
  }
}
```

**When to use RxJS:**

- Async operations (HTTP, timers)
- DOM events that need debouncing/throttling
- Multiple event sources combined
- Already have Observable from Angular (router, form control)

**When to use signals:**

- Local component state
- Derived state
- Any synchronous reactivity

### 5. Type Safety

**Leverage TypeScript strict mode:**

```typescript
// ✅ GOOD: Strict types
export class TuiCalendar {
  public readonly value = input.required<TuiDay>();
  public readonly min = input<TuiDay | null>(null);
  public readonly max = input<TuiDay | null>(null);

  public readonly isDisabled = computed(() => {
    const value = this.value();
    const min = this.min();
    const max = this.max();

    return (min !== null && value.dayBefore(min)) || (max !== null && value.dayAfter(max));
  });
}

// ❌ BAD: Loose types
export class TuiCalendar {
  @Input() value: any;
  @Input() min: any;

  get isDisabled() {
    return this.value < this.min || this.value > this.max; // Type error!
  }
}
```

### 6. Testing Philosophy

**Test-Driven Development for bugs:**

```typescript
// When fixing a bug:
// 1. Write failing test first
it('should not submit form when button is disabled', () => {
  const onSubmit = jest.fn();
  fixture.componentInstance.disabled = true;
  fixture.detectChanges();

  button.click();

  expect(onSubmit).not.toHaveBeenCalled(); // FAILS initially
});

// 2. Fix the bug
// 3. Test passes
```

**Test coverage for new features:**

- Component behavior tests (not implementation)
- Edge cases and error states
- Accessibility (ARIA attributes, keyboard navigation)
- Form integration (ControlValueAccessor)

```typescript
// ✅ GOOD: Test behavior
it('should toggle expansion on click', async () => {
  const harness = await loader.getHarness(TuiAccordionHarness);

  expect(await harness.isExpanded()).toBe(false);
  await harness.toggle();
  expect(await harness.isExpanded()).toBe(true);
});

// ❌ BAD: Test implementation details
it('should call toggleExpanded method', () => {
  spyOn(component, 'toggleExpanded');
  button.click();
  expect(component.toggleExpanded).toHaveBeenCalled();
});
```

## Task-Specific Approaches

### Adding a New Component

**Checklist:**

1. ✅ Create in correct package (cdk/core/kit/addon)
2. ✅ Follow file structure: `component.directive.ts`, `component.options.ts`, `component.ts`, `index.ts`
3. ✅ Use composition: export array of directives, not single class
4. ✅ Create options token if customizable
5. ✅ Add styles component with `tuiWithStyles()`
6. ✅ Write tests (unit + harness if complex)
7. ✅ Export from package `index.ts`
8. ✅ Add to demo with examples
9. ✅ Check no circular dependencies

**Example new component structure:**

```typescript
// projects/kit/components/my-component/my-component.directive.ts
@Directive({
  selector: '[tuiMyComponent]',
  hostDirectives: [TuiWithAppearance],
  host: {'[attr.data-state]': 'state()'},
})
export class TuiMyComponent {
  protected readonly nothing = tuiWithStyles(Styles);
  public readonly size = input(inject(TUI_MY_COMPONENT_OPTIONS).size);
}

// projects/kit/components/my-component/my-component.options.ts
export const [TUI_MY_COMPONENT_OPTIONS, tuiMyComponentOptionsProvider] = tuiCreateOptions({size: 'm' as const});

// projects/kit/components/my-component/my-component.ts
export const TuiMyComponent = [TuiMyComponentDirective] as const;

// projects/kit/components/my-component/index.ts
export * from './my-component.directive';
export * from './my-component.options';
export * from './my-component';
```

### Refactoring Existing Code

**Safe refactoring process:**

1. ✅ Read and understand current implementation
2. ✅ Run existing tests to ensure they pass
3. ✅ Make incremental changes (not big bang rewrites)
4. ✅ Run tests after each change
5. ✅ Preserve public API (check for breaking changes)
6. ✅ Update tests if behavior changes intentionally
7. ✅ Check demo still works

**When NOT to refactor:**

- Don't "clean up" code that wasn't part of the task
- Don't add comments/JSDoc unless unclear
- Don't change formatting (prettier handles it)
- Don't extract utilities for one-time use

### Fixing Bugs

**Bug fix workflow:**

1. ✅ Reproduce the bug (create failing test)
2. ✅ Understand root cause (read relevant code)
3. ✅ Fix minimal code to resolve issue
4. ✅ Verify test passes
5. ✅ Check for similar bugs in related components
6. ✅ Update documentation if behavior changes

**Don't over-engineer bug fixes:**

```typescript
// ❌ BAD: Over-engineered fix
class ValidationService {
  validateInput(value: string, rules: ValidationRule[]): ValidationResult {
    // 50 lines of abstraction for one validation
  }
}

// ✅ GOOD: Simple, direct fix
export class TuiInput extends TuiControl<string> {
  public readonly maxLength = input<number | null>(null);

  protected override onChange = (value: string) => {
    const max = this.maxLength();
    const trimmed = max !== null ? value.slice(0, max) : value;
    super.onChange(trimmed);
  };
}
```

### Performance Optimization

**Optimization priorities:**

1. Use `OnPush` change detection (already default)
2. Use signals for derived state (automatic dependency tracking)
3. Avoid heavy computations in templates
4. Use `trackBy` for `*ngFor`
5. Lazy load routes and components
6. Tree-shake unused code via explicit exports

```typescript
// ✅ GOOD: Efficient computed
export class TuiTable {
  public readonly data = input.required<Item[]>();
  public readonly filtered = computed(() => this.data().filter((item) => item.visible));
}

// ❌ BAD: Method in template (called every check)
export class TuiTable {
  @Input() data: Item[] = [];

  getFiltered(): Item[] {
    return this.data.filter((item) => item.visible);
  }
}
// Template: *ngFor="let item of getFiltered()"  // BAD!
```

### Adding Tests

**Test structure:**

```typescript
describe('TuiButton', () => {
  // Setup component
  @Component({
    imports: [TuiButton],
    template: `
      <button
        [disabled]="disabled"
        tuiButton
      >
        Click
      </button>
    `,
  })
  class TestComponent {
    disabled = false;
  }

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let button: HTMLButtonElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
      providers: [provideTaiga()],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    button = fixture.nativeElement.querySelector('button');
    fixture.detectChanges();
  });

  // Group related tests
  describe('disabled state', () => {
    it('should apply disabled attribute', () => {
      component.disabled = true;
      fixture.detectChanges();

      expect(button.disabled).toBe(true);
    });

    it('should not respond to clicks when disabled', () => {
      component.disabled = true;
      fixture.detectChanges();

      button.click();

      // Assert no action happened
    });
  });
});
```

## Common Pitfalls to Avoid

### 1. Don't Use Deprecated Angular APIs

```typescript
// ❌ BAD: Deprecated APIs
@Input() value: string;
@Output() valueChange = new EventEmitter<string>();
@HostBinding('class.disabled') disabled: boolean;
@HostListener('click') onClick() { }

// ✅ GOOD: Modern APIs
public readonly value = input<string>('');
public readonly valueChange = output<string>();
host: {
    '[class.disabled]': 'disabled()',
    '(click)': 'onClick()',
}
```

### 2. Don't Mutate Signal Values

```typescript
// ❌ BAD: Direct mutation
export class TuiCheckboxGroup {
  public readonly selected = signal<string[]>([]);

  addItem(item: string) {
    this.selected().push(item); // MUTATION!
  }
}

// ✅ GOOD: Immutable updates
export class TuiCheckboxGroup {
  public readonly selected = signal<string[]>([]);

  addItem(item: string) {
    this.selected.update((items) => [...items, item]);
  }
}
```

### 3. Don't Skip Reading Code

```typescript
// ❌ BAD: Guessing at API
// "Let's use setButtonColor() method..."

// ✅ GOOD: Read first
// 1. Read button.directive.ts
// 2. Found appearance input and TUI_BUTTON_OPTIONS
// 3. "Use appearance input or override TUI_BUTTON_OPTIONS token"
```

### 4. Don't Create Circular Dependencies

```typescript
// ❌ BAD: Circular dependency
// core/button → kit/tooltip → core/button (circular!)

// ✅ GOOD: One-way dependency
// core/button (no imports from kit)
// kit/tooltip (imports from core/button)
```

### 5. Don't Add Unnecessary Abstractions

```typescript
// ❌ BAD: Premature abstraction
export abstract class BaseFormComponent<T> extends TuiControl<T> {
  abstract getValidators(): ValidatorFn[];
  abstract formatValue(value: T): string;
  abstract parseValue(value: string): T;
}

// ✅ GOOD: Concrete implementation
export class TuiInput extends TuiControl<string> {
  // Specific behavior for input
}
```

## Best Practices Summary

1. **Read before writing** - Understand existing code
2. **Match patterns** - Don't introduce new patterns without reason
3. **Signals first** - Use signals over manual subscriptions
4. **Type safety** - Leverage TypeScript strict mode
5. **Test behavior** - Not implementation details
6. **Small PRs** - Focused changes are easier to review
7. **No over-engineering** - Solve current problem, not future ones
8. **Composition over inheritance** - Use directives and tokens
9. **Immutable updates** - Don't mutate signal values
10. **Check for breaking changes** - Preserve public API

## Useful Commands for Agents

```bash
# Find existing patterns
grep -r "pattern" projects/

# Find component usage
grep -r "TuiButton" projects/demo/

# Run affected tests
nx affected:test

# Check no circular dependencies
nx graph

# Build specific package
nx build cdk

# Run single test file
nx test kit --testFile="button.spec.ts"

# Check types
npm run typecheck

# Check bundle size impact
npm run build:demo
```

## Agent Self-Check Questions

Before submitting changes, ask:

1. ✅ Did I read the relevant code before suggesting changes?
2. ✅ Do my changes match existing patterns in the codebase?
3. ✅ Are tests passing?
4. ✅ Did I add tests for new behavior?
5. ✅ Am I using signals instead of manual subscriptions?
6. ✅ Am I using modern Angular APIs (input(), output(), host{})?
7. ✅ Did I check for circular dependencies?
8. ✅ Is this the minimal change to solve the problem?
9. ✅ Did I preserve the public API (no breaking changes)?
10. ✅ Would this code pass the project's linter/prettier?

## Resources for Agents

- **Angular Signals:** https://angular.dev/guide/signals
- **Angular Modern APIs:** https://angular.dev/essentials
- **Taiga UI Docs:** https://taiga-ui.dev
- **TypeScript Strict Mode:** https://www.typescriptlang.org/tsconfig#strict
- **Testing Best Practices:** Focus on behavior, not implementation

---

**Remember:** The goal is to write code that looks like it was written by the Taiga UI team, not to introduce new
patterns or styles. Consistency is more valuable than cleverness.
