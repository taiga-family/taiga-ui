# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Taiga UI is a fully-treeshakable Angular UI Kit consisting of multiple base libraries and add-ons. It's built on Angular
19+, uses signals for reactive state management, and leverages ng-polymorpheus for dynamic content rendering.

## Development Commands

### Installation & Setup

```bash
npm ci                          # Install dependencies (use npm, not yarn)
npm start                       # Start demo dev server
npm run start:ssl               # Start with SSL
npm run start:ssr               # Start with SSR
```

### Testing

```bash
npm test                        # Run all Jest unit tests
npm run typecheck               # TypeScript strict type checking
npm run test:e2e                # Run Playwright E2E tests
npm run cypress:open            # Open Cypress UI

# Test a single package
nx test <package-name>          # e.g., nx test cdk
```

### Building

```bash
npm run build:demo              # Build demo application
npm run run-many:build:libs     # Build all library packages
nx build <package-name>         # Build specific package
```

### Linting & Code Quality

```bash
npm run lint                    # ESLint
npm run prettier                # Prettier formatting
npm run stylelint               # CSS/Less linting
npm run cspell                  # Spell checking
npm run knip                    # Find unused exports
```

### Release

```bash
npm run release:patch           # Patch version bump
npm run release:minor           # Minor version bump
npm run release:major           # Major version bump
```

## Architecture

### Package Organization

The monorepo uses Nx workspaces with packages under `/projects`:

**Foundation Layer:**

- `@taiga-ui/cdk` - Component Development Kit (directives, observables, utilities, tokens, pipes)
- `@taiga-ui/core` - Core UI components and services (button, input, label, icon, etc.)
- `@taiga-ui/i18n` - Internationalization
- `@taiga-ui/icons` - Icon library
- `@taiga-ui/polymorpheus` - Dynamic content rendering

**Component Libraries:**

- `@taiga-ui/kit` - Main component library (70+ components: forms, complex UI, layout)
- `@taiga-ui/addon-table` - Advanced table components
- `@taiga-ui/addon-charts` - Chart components
- `@taiga-ui/addon-doc` - Documentation utilities
- `@taiga-ui/addon-commerce` - E-commerce components
- `@taiga-ui/addon-mobile` - Mobile-specific components
- `@taiga-ui/layout` - Layout components

**Utilities:**

- `@taiga-ui/testing` - Testing utilities and harnesses
- `@taiga-ui/experimental` - Experimental features
- `@taiga-ui/legacy` - Deprecated/legacy components
- `@taiga-ui/taiga-schematics` - Angular schematics for migrations

**Dependency Flow:** `cdk` → `core` → `kit` → `addons`

### Component Structure

Components follow a composition pattern with directives and tokens:

```text
component-name/
├── component.directive.ts      # Core logic
├── component.component.ts      # View component (if needed)
├── component.options.ts        # Options token + defaults
├── component.providers.ts      # DI setup
├── component.ts                # Barrel export composing pieces
├── index.ts                    # Public API
├── test/
│   └── component.spec.ts       # Unit tests
└── ng-package.json            # Build config
```

Components are composed of multiple pieces:

```typescript
// Composition export pattern
export const TuiSelect = [TuiSelectDirective, TuiNativeSelect, TuiLabel, TuiTextfieldComponent] as const;
```

## Key Patterns

### 1. Form Control Pattern

All form components extend `TuiControl<T>` which implements `ControlValueAccessor`:

```typescript
@Directive()
export abstract class TuiControl<T> implements ControlValueAccessor {
  protected readonly control = inject(NgControl, {self: true});

  public readonly value = computed(() => this.internal() ?? this.fallback);
  public readonly disabled = computed(() => this.status() === 'DISABLED');
  public readonly interactive = computed(() => !this.disabled() && !this.readOnly());
  public readonly invalid = computed(() => {
    /* validation logic */
  });

  public onChange: (value: T) => void = EMPTY_FUNCTION;
  public onTouched = EMPTY_FUNCTION;
}
```

### 2. Options Token Pattern

Customizable components use the `tuiCreateOptions` utility:

```typescript
// Define token and provider in one call
export const [TUI_BUTTON_OPTIONS, tuiButtonOptionsProvider] = tuiCreateOptions({
  appearance: 'primary',
  size: 'l',
});

// Use in component
@Directive({selector: '[tuiButton]'})
export class TuiButton {
  public readonly size = input(inject(TUI_BUTTON_OPTIONS).size);
}

// Override in module/component
providers: [tuiButtonOptionsProvider({size: 'm'})];
```

### 3. Host Directives Pattern

Use Angular's `hostDirectives` for composing behavior:

```typescript
@Directive({
  hostDirectives: [TuiWithAppearance, TuiWithIcons, TuiWithDropdown],
  host: {
    '[attr.data-size]': 'size()',
  },
})
export class TuiButton {}
```

### 4. Polymorpheus Content

Use `PolymorpheusContent` for flexible content rendering:

```typescript
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export class TuiDialog {
  public readonly content = input<PolymorpheusContent>();
  // Accepts: string, Component, TemplateRef, or custom content
}
```

### 5. Style Injection Pattern

Use `tuiWithStyles()` to inject component styles:

```typescript
@Component({
  template: '',
  styleUrl: './component.style.less',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class Styles {}

@Directive({selector: '[tuiComponent]'})
export class TuiComponent {
  protected readonly nothing = tuiWithStyles(Styles);
}
```

### 6. DI Token Patterns

Common token types:

```typescript
// Observable tokens for reactive state
export const TUI_ACTIVE_ELEMENT = new InjectionToken<Observable<EventTarget | null>>();

// Signal tokens for reactive values
export const TUI_DARK_MODE = new InjectionToken<WritableSignal<boolean>>();

// Configuration tokens
export const TUI_ANIMATION_SPEED = new InjectionToken<number>();
```

Key tokens:

- `TUI_DARK_MODE` - Dark mode signal
- `TUI_BREAKPOINT` - Responsive breakpoints
- `TUI_ICON` - Icon resolution
- `TUI_VIEWPORT` - Viewport size tracking
- `TUI_ANIMATION_SPEED` - Animation duration

### 7. Observable Utilities

Located in `cdk/observables/`:

- `tuiTypedFromEvent()` - Type-safe DOM event observable
- `tuiControlValue()` - Form control value changes
- `tuiWatch()` - Mark for change detection
- `tuiZonefreeScheduler()` - RxJS scheduler outside NgZone

### 8. DI Utilities

Located in `cdk/utils/di/`:

- `tuiCreateOptions(defaults)` - Create token + provider factory
- `tuiProvideOptions(token, options, defaults)` - Provide with override
- `tuiProvide(provide, useExisting, multi?)` - Simple provider helper

## Coding Standards (from copilot-instructions.md)

### Angular Best Practices

- Use standalone components (default in Angular 19+, no `standalone` flag needed)
- Use signals for reactive state: `signal()`, `computed()`, prefer `update()` over `mutate()`
- Set `changeDetection: ChangeDetectionStrategy.OnPush`
- Use `host` object instead of `@HostBinding`/`@HostListener` decorators
- Use functional input/output APIs: `input.required<T>()`, `output<T>()`
- Keep components small and focused
- Prefer reactive forms to template-driven forms
- Use `[class.foo]` instead of `ngClass`, `[style.prop]` instead of `ngStyle`
- Use `inject()` function instead of constructor injection

### TypeScript Guidelines

- Use `strict` mode
- Avoid `any`, use `unknown` when type is uncertain
- Private fields before protected, protected before public
- Prefer `readonly` where appropriate
- Prefer type inference when obvious

### Component Structure

- Logic in `.ts`, styles in `.less`, template in `.html` (unless trivial)
- Drop unused imports and variables
- No `console.log` in codebase
- JSDoc optional, prefer self-documenting code

### Testing

- Write tests first (TDD approach when fixing bugs)
- Use `TestBed` with `provideTaiga()` for component tests
- Use test harnesses from `@taiga-ui/testing` when available

## Testing Patterns

### Unit Testing with Jest

```typescript
describe('TuiButton', () => {
  @Component({
    imports: [TuiButton],
    template: `
      <button tuiButton>Click</button>
    `,
  })
  class Test {}

  let fixture: ComponentFixture<Test>;
  let component: Test;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Test],
      providers: [provideTaiga()],
    });
    fixture = TestBed.createComponent(Test);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders button', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toBe('Click');
  });
});
```

### Using Test Harnesses

```typescript
import {TuiButtonHarness} from '@taiga-ui/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';

it('works with harness', async () => {
  const loader = TestbedHarnessEnvironment.loader(fixture);
  const harness = await loader.getHarness(TuiButtonHarness);
  expect(await harness.getText()).toBe('Click');
});
```

## Build System

- **Nx** for monorepo orchestration with caching
- **ng-packagr** for library packaging
- Build output: `dist/{package-name}`
- Each package has its own `project.json` with build targets
- Incremental builds via Nx dependency graph
- Run `nx graph` to visualize dependencies

## Common Tasks

### Adding a New Component

1. Create component directory under appropriate package (e.g., `projects/kit/components/my-component/`)
2. Create files: `my-component.directive.ts`, `my-component.ts` (barrel export), `index.ts`
3. If customizable, create `my-component.options.ts` with token
4. Add styles component if needed (`.style.less`)
5. Write tests in `test/my-component.spec.ts`
6. Export from package `index.ts`
7. Add to demo under `projects/demo/`

### Running a Single Test

```bash
nx test kit --testFile="my-component.spec.ts"
```

### Updating Dependencies

Use npm (not yarn). Dependencies managed by Renovate bot.

### Debugging Tests

Add `--watch` flag:

```bash
nx test kit --watch
```

## Important Files

- `nx.json` - Nx workspace configuration
- `tsconfig.json` - Path mappings for all packages
- `package.json` - Root scripts and workspace config
- `projects/*/project.json` - Per-package build configuration
- `projects/*/ng-package.json` - ng-packagr settings
- `.github/workflows/` - CI/CD pipelines

## Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat(core): add new button variant`
- `fix(kit): resolve input validation issue`
- `deprecate(cdk): mark old API as deprecated`

## Resources

- Website: https://taiga-ui.dev
- Documentation: https://taiga-ui.dev/getting-started
- Angular Essentials: https://angular.dev/essentials
- Discord: #taiga-ui in Angular Discord
