# Writing Taiga UI Migrations

Guide for writing schematics migrations (for AI and developers).

## Where to find the previous major version's source

To understand what existed before the migration, use one of these two approaches (in order of preference):

**Option A — Local checkout** (fastest, works offline): Look for a sibling directory named `../taiga-ui-vN` (e.g.,
`../taiga-ui-v4` when writing v5 migrations). If it exists, read files directly from there.

**Option B — GitHub via `gh` CLI** (when local checkout is absent): The previous major is kept in the `vN.x` branch of
the same repo (`taiga-family/taiga-ui`).

```bash
# Browse exports of a package in the previous major
gh api repos/taiga-family/taiga-ui/contents/projects/kit/index.ts?ref=v4.x \
  | jq -r '.content' | base64 -d

# Search for a specific symbol
gh api "search/code?q=TuiInputPhone+repo:taiga-family/taiga-ui+ref:v4.x" \
  | jq '.items[].path'
```

## Step 1: Analyze the change

Before writing a migration, answer these questions:

1. **Find the entity in the previous major version** — using one of the approaches above, check the public API (exports
   in `index.ts`) and usage in demo pages of the previous major branch (e.g., `v4.x`)
2. **Find the equivalent in the current version** — check `projects/` for exports, renamed/moved/removed entities
3. **Check if migration already exists** — search in `projects/cdk/schematics/ng-update/vN/`
4. **Determine the type of change** — rename, package move, API change, removal

## Step 2: Choose the migration strategy

Determine what happened to the entity and pick the right approach:

| Situation                                                             | Strategy                                                                                             |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Simple 1:1 rename or package move                                     | Auto-migrate via `identifiers-to-replace` (+ template constants if needed)                           |
| Entity moved to `@taiga-ui/legacy` AND migration is complex/ambiguous | Move import to `@taiga-ui/legacy` via `identifiers-to-replace` + leave TODO via `migration-warnings` |
| Entity removed, replacement exists but API differs significantly      | Leave TODO via `migration-warnings` explaining what to use instead                                   |
| Entity removed, no replacement needed (things work without it)        | Remove via `modules-to-remove`, no TODO needed                                                       |
| Entity removed, unclear how to work without it                        | Leave TODO via `migration-warnings` explaining the situation                                         |

### Priority

Focus on what impacts users most:

1. **High priority**: `@Component({ imports: [...] })` + template inputs/outputs (directives, pipes, components)
2. **Medium priority**: `inject()` calls, constructor injection, `viewChild` references
3. **Low priority**: Internal/private API usage, edge cases, type-only imports

## Step 3: Choose the migration mechanism

```text
Is it a TypeScript IMPORT?
|-- 1:1 rename or package move?           --> identifiers-to-replace
|-- Removal with no replacement?          --> modules-to-remove
|-- API changed, needs manual work?       --> migration-warnings (TODO comment)
|
Is it a TEMPLATE ATTRIBUTE?
|-- Just rename the attribute?            --> attrs-to-replace
|-- Rename + transform value?             --> attr-with-values-to-replace
|-- Remove the attribute?                 --> inputs-to-remove
|-- Complex DOM restructuring?            --> custom migration function
|
Is it a HOST BINDING in @Component({ host: {} })?
|-- Rename host attribute?                --> attrs-in-host-to-replace
|
Is it a FUNCTION CALL parameter?
|-- Rename parameter or change value?     --> function-parameters-to-replace
|
Is it an HTML TAG?
|-- Rename the tag?                       --> tags-to-replace
|
Need a developer hint?
|-- In TypeScript                         --> migration-warnings
|-- In template                           --> html-comments
|
Is it a STYLE IMPORT in .less/.css? (v5+)
|-- Deprecated import path, add warning comment? --> style-comments
```

## Mechanism reference

### identifiers-to-replace

**When**: Import name or package path changed, but API is the same (1:1 replacement).

**File**: `vN/steps/constants/identifiers-to-replace.ts`

```ts
// Rename + move package
{
    from: { name: 'TuiPdfViewerService', moduleSpecifier: '@taiga-ui/kit' },
    to:   { name: 'TuiPdfViewerService', moduleSpecifier: '@taiga-ui/legacy' },
},

// Rename only
{
    from: { name: 'TuiMobileCalendarDropdownNew', moduleSpecifier: '@taiga-ui/addon-mobile' },
    to:   { name: 'TuiMobileCalendarDropdown',    moduleSpecifier: '@taiga-ui/addon-mobile' },
},

// One import splits into multiple
{
    from: { name: 'TuiInputYearModule', moduleSpecifier: '@taiga-ui/legacy' },
    to: [
        { name: 'TuiInputYear', moduleSpecifier: '@taiga-ui/kit' },
        { name: 'TuiTextfield',  moduleSpecifier: '@taiga-ui/core' },
    ],
},
```

### modules-to-remove

**When**: Entity is deleted with no replacement. Removes from `imports` array and import declaration.

**File**: `vN/steps/constants/modules-to-remove.ts`

```ts
{
    name: 'TuiTextareaLimit',
    moduleSpecifier: '@taiga-ui/kit',
},
```

### migration-warnings

**When**: Automatic migration impossible or incomplete. Inserts `// TODO: (Taiga UI migration)` comment above the
import.

**File**: `vN/steps/constants/migration-warnings.ts`

**Important**: `showWarnings` runs at the end of the pipeline (after `replaceIdentifiers`). The `moduleSpecifier` must
match the **final** import path (after all renames).

```ts
{
    name: 'TuiCarousel',
    moduleSpecifier: '@taiga-ui/legacy',  // after identifiers-to-replace moves it here
    message: 'TuiCarousel is deprecated. Migrate to TuiSlides from @taiga-ui/layout',
},
```

### attrs-to-replace

**When**: Template attribute renamed. Handles both `attr` and `[attr]` forms.

**File**: `vN/steps/constants/attrs-to-replace.ts`

```ts
{
    from: { attrName: '(tuiPresentChange)', withTagNames: ['*'] },
    to:   { attrName: '(tuiPresent)' },
},
```

### attrs-in-host-to-replace

**When**: An attribute key inside `@Component({ host: {} })` is renamed.

**File**: `vN/steps/constants/attrs-in-host-to-replace.ts`

**Important**: This is a **TS-side step**, not part of the template pipeline. In v5 it runs as a separate step _before_
`migrateTemplates`. Only available in v5+.

**Format** — plain string pair, not the `ReplacementAttribute` shape used in `attrs-to-replace`:

```ts
{
    from: '(tuiPresentChange)',
    to: '(tuiPresent)',
},
```

### attr-with-values-to-replace

**When**: Attribute renamed AND value needs transformation.

**File**: `vN/steps/constants/attr-with-values-to-replace.ts`

```ts
// Static value mapping
{
    attrNames: ['appearance'],
    valueReplacer: [
        { from: 'error', to: 'negative' },
        { from: 'success', to: 'positive' },
    ],
},

// Dynamic value transformation (function)
{
    attrNames: ['[pseudo]'],
    newAttrName: '[style.text-decoration-line]',
    valueReplacer: (value) =>
        value === 'true' ? "'underline'" : `${value} ? 'underline' : null`,
    withTagNames: ['a', 'button'],
    filterFn: (el) => hasElementAttribute(el, 'tuiLink'),
},
```

### inputs-to-remove

**When**: Attribute should be deleted from template.

**File**: `vN/steps/constants/inputs-to-remove.ts`

**Important**: `removeInputs` always removes both `attr` and `[attr]` forms. Use `filterFn` to exclude elements where
`[attr]` should be handled by `attr-with-values-to-replace` instead.

```ts
{
    inputName: 'pseudo',
    tags: ['a', 'button'],
    filterFn: (el) =>
        hasElementAttribute(el, 'tuiLink') &&
        !el.attrs.some((attr) => attr.name === '[pseudo]' && attr.value !== 'false'),
},
```

### tags-to-replace

**When**: HTML/component tag itself changes.

**File**: `vN/steps/constants/tags-to-replace.ts`

```ts
{
    from: 'tui-chip',
    to: 'span',
    addAttributes: ['tuiChip'],
},
```

### function-parameters-to-replace

**When**: A function call's parameter name or value changed (typically option providers).

**File**: `vN/steps/constants/function-parameters-to-replace.ts`

```ts
// Rename parameter value
{
    names: ['tuiAmountOptionsProvider'],
    parameters: [{name: 'currencyAlign'}],
    valueReplacer: [
        {from: 'left', to: 'start'},
        {from: 'right', to: 'end'},
    ],
},

// Rename parameter itself
{
    names: ['tuiDialogOptionsProvider', 'tuiAlertOptionsProvider'],
    parameters: [{name: 'closeable', renameTo: 'closable'}],
},
```

### html-comments

**When**: Template pattern detected but auto-migration unsafe. Inserts HTML TODO comment.

**File**: `vN/steps/constants/html-comments.ts`

```ts
{
    tag: 'tui-accordion-item',
    withAttrs: [],
    comment: 'tui-accordion-item has been removed. Use new tuiAccordion directive instead',
},
```

### style-comments (v5+)

**When**: A LESS/CSS import path is deprecated and you want to leave a comment in the stylesheet pointing developers to
the new location.

**File**: `vN/steps/constants/style-comments.ts`

A plain object mapping the old import path string to a comment message:

```ts
export const STYLE_COMMENTS = {
  '@taiga-ui/legacy/styles/markup/tui-space':
    'Global styles will be removed in next major. Source: https://github.com/.../tui-space.less',
} as const;
```

### Custom migration function

**When**: None of the above mechanisms are sufficient (complex DOM restructuring, conditional logic, multi-element
transformations).

> **Before writing a custom function**, go through the decision tree above and verify that no existing mechanism covers
> the case.

**File**: Create `vN/steps/templates/migrate-<name>.ts`

**Register in**: `vN/steps/migrate-templates.ts` — import and add to the `actions` array as a **bare function
reference** (no wrapper).

Constant-driven mechanisms at the top of the array use `getAction({action, requiredData})`. Custom functions go in as
direct references:

```ts
const actions = [
  // constant-driven — wrapped:
  getAction({action: replaceTags, requiredData: TAGS_TO_REPLACE}),
  // custom — bare reference, no getAction():
  migrateMyFeature,
] as const;
```

```ts
export function migrateExample({
  resource,
  recorder,
  fileSystem,
}: {
  fileSystem: DevkitFileSystem;
  recorder: UpdateRecorder;
  resource: TemplateResource;
}): void {
  const template = getTemplateFromTemplateResource(resource, fileSystem);
  const templateOffset = getTemplateOffset(resource);

  // Find elements, manipulate with recorder.remove() / recorder.insertRight()
}
```

**Tips for writing custom migrations:**

- **Process replacements in reverse order** — when making multiple changes in the same template, sort by offset
  descending before applying. Otherwise earlier changes shift offsets for later ones.
- **Always add `templateOffset`** to all `recorder` operations. For inline templates (`template: '...'`) the offset is
  non-zero; for external `.html` files it's 0. Forgetting this breaks inline template migrations.
- **Available utilities** for searching elements: `findElementsByTagName`, `findElementsWithAttribute`,
  `findElementsWithAttributeOnTag`, `hasElementAttribute`, `hasElementAttributeWithValue` (from
  `../../utils/templates/elements`). For DOM navigation: `hasAncestor`, `hasChild` (from
  `../utils/templates/dom-traversal`).
- **`filterFn`** in constant-driven mechanisms has access to the full Parse5 element — you can inspect `el.attrs`,
  `el.tagName`, `el.childNodes`, `el.sourceCodeLocation`.

## Step 4: Write test

**File**: `vN/tests/schematic-migrate-<name>.spec.ts`

The `migrate()` function accepts these fields (all optional except when needed for the specific migration):

- `component` — TypeScript component source (triggers `.ts` snapshot)
- `template` — external HTML template (triggers `.html` snapshot)
- `styles` — LESS/CSS source (triggers `.less` snapshot; use for style-import migrations)
- `packageJson` — JSON string (triggers `package.json` snapshot)
- `projectJson` — JSON string (triggers `project.json`/`angular.json` snapshot)

```ts
import {join} from 'node:path';
import {resetActiveProject} from 'ng-morph';
import {createMigration} from '../../../utils/run-migration';

describe('ng-update <description>', () => {
  const migrate = createMigration({
    collection: join(__dirname, '../../../migration.json'),
  });

  it(
    'description of what migration does',
    migrate({
      // For TypeScript migrations:
      component: `
                import {MyEntity} from '@taiga-ui/kit';

                @Component({
                    templateUrl: './test.html',
                    imports: [MyEntity],
                })
                export class TestComponent {}
            `,
      // For template migrations: use /* HTML */ tag for syntax highlighting
      template: /* HTML */ `
        <div
          myDirective
          [myInput]="value"
        >
          content
        </div>
      `,
    }),
  );

  it(
    'style import migration',
    migrate({
      styles: `@import '@taiga-ui/core/styles/taiga-ui-local.less';`,
    }),
  );

  it(
    'angular.json migration',
    migrate({
      projectJson: JSON.stringify({
        targets: {build: {options: {styles: ['@taiga-ui/core/styles/taiga-ui-theme.less']}}},
      }),
    }),
  );

  afterEach(() => resetActiveProject());
});
```

Run tests: `npx nx test cdk -- --testPathPattern="schematic-migrate-<name>" --updateSnapshot`

Run all vN tests: `npx nx test cdk -- --testPathPattern="ng-update/vN"`

## Step 5: Know the pitfalls

The pipeline in `vN/index.ts` runs TS migrations first, then template migrations, then warnings last. Full order is in
the file itself. What matters for writing new migrations:

- **`replaceAttrValues` runs before `removeInputs`** in template migrations. If both target the same attribute (e.g.
  `[pseudo]`), use `filterFn` in `inputs-to-remove` to skip elements already handled by `replaceAttrValues`. Otherwise
  `removeInputs` will overwrite the replacement.
- **`showWarnings` runs last** (after `replaceIdentifiers`). Use the **post-rename** name and moduleSpecifier. For
  example, if `identifiers-to-replace` moves `TuiCarousel` from `@taiga-ui/kit` to `@taiga-ui/legacy`, the warning must
  use `moduleSpecifier: '@taiga-ui/legacy'`.
- **`modules-to-remove` and `migration-warnings` are mutually exclusive** for the same entity. `modules-to-remove`
  deletes the import before `showWarnings` runs, so the warning won't fire. Choose one: either remove or warn, not both.
  If a removed entity needs a hint — use only `migration-warnings` (it inserts a TODO comment but leaves the import for
  the developer to handle).
- **Dynamic template values** like `[attr]="variable"` need conditional expressions: `variable ? 'value' : null`. Don't
  replace with a static string — it breaks the conditional behavior.
- **`removeInputs` always removes both `attr` and `[attr]` forms**. If you need different handling for static `attr` vs
  dynamic `[attr]="expr"`, use `filterFn` to differentiate.
- **One import can be split into multiple** via `identifiers-to-replace` — use an array in the `to` field. Useful when
  an NgModule is replaced by multiple standalone imports.

## Checklist before PR

- [ ] Checked previous version API (exports, demo usage, deprecated annotations)
- [ ] Checked current version API (new name, new package, new behavior)
- [ ] Verified no existing migration covers this
- [ ] Chose the simplest mechanism that works
- [ ] Handled edge cases: `[attr]="false"`, static `attr`, dynamic `[attr]="variable"`
- [ ] Wrote test with representative cases
- [ ] Ran `--updateSnapshot` and verified snapshots are correct
- [ ] Ran all vN tests to check for regressions
- [ ] Updated PR description with before/after table
