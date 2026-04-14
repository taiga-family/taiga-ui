# Utility reference

## identifiers-to-replace

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

## modules-to-remove

**When**: Entity is deleted with no replacement. Removes from `imports` array and import declaration.

**File**: `vN/steps/constants/modules-to-remove.ts`

```ts
{
    name: 'TuiTextareaLimit',
    moduleSpecifier: '@taiga-ui/kit',
},
```

## migration-warnings

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

## attrs-to-directive-replace

**When**: An `@Input()` on a component should become a directive attribute instead (e.g. `prefix` on `tui-input` →
`tuiTextfieldPrefix` directive).

**File**: `vN/steps/constants/attr-to-directive-replace.ts`

```ts
{
    componentSelector: ['tui-input', 'tui-input-number'],
    inputProperty: 'prefix',
    directive: 'tuiTextfieldPrefix',
    directiveModule: {
        name: 'TuiTextfieldControllerModule',
        moduleSpecifier: '@taiga-ui/core',
    },
    filterFn: (el) => hasElementAttribute(el, 'tuiLink'), // optional
},
```

**Register** by passing `ATTRS_TO_DIRECTIVE_REPLACE` into
`getAction({action: replaceAttrsByDirective, requiredData: ATTRS_TO_DIRECTIVE_REPLACE})` inside `migrate-templates.ts`.

## attrs-to-replace

**When**: Template attribute renamed. Handles both `attr` and `[attr]` forms.

**File**: `vN/steps/constants/attrs-to-replace.ts`

```ts
{
    from: { attrName: '(tuiPresentChange)', withTagNames: ['*'] },
    to:   { attrName: '(tuiPresent)' },
},
```

## attrs-in-host-to-replace

**When**: An attribute key inside `@Component({ host: {} })` is renamed.

**File**: `vN/steps/constants/attrs-in-host-to-replace.ts`

**Important**: This is a **TS-side step**, not part of the template pipeline. Check `vN/index.ts` — it may run as a
separate step _before_ `migrateTemplates`. Check availability for your target version.

**Format** — plain string pair, not the `ReplacementAttribute` shape used in `attrs-to-replace`:

```ts
{
    from: '(tuiPresentChange)',
    to: '(tuiPresent)',
},
```

## attr-with-values-to-replace

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

## inputs-to-remove

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

## tags-to-replace

**When**: HTML/component tag itself changes.

**File**: `vN/steps/constants/tags-to-replace.ts`

```ts
{
    from: 'tui-chip',
    to: 'span',
    addAttributes: ['tuiChip'],
},
```

## function-parameters-to-replace

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

## html-comments

**When**: Template pattern detected but auto-migration unsafe. Inserts HTML TODO comment.

**File**: `vN/steps/constants/html-comments.ts`

```ts
{
    tag: 'tui-accordion-item',
    withAttrs: [],
    comment: 'tui-accordion-item has been removed. Use new tuiAccordion directive instead',
},
```

## style-comments

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

## Custom migration function

**When**: None of the above utilities are sufficient (complex DOM restructuring, conditional logic, multi-element
transformations).

> **Before writing a custom function**, go through the decision tree in SKILL.md and verify that no existing utility
> covers the case.

**File**: Create `vN/steps/templates/migrate-<name>.ts`

For reference, look at existing custom migrations: `projects/cdk/schematics/ng-update/vN/steps/templates/migrate-*.ts`

**Register in**: `vN/steps/migrate-templates.ts` — import and add to the `actions` array as a **bare function
reference** (no wrapper).

Constant-driven utilities at the top of the array use `getAction({action, requiredData})`. Custom functions go in as
direct references:

```ts
const actions = [
  // constant-driven — wrapped:
  getAction({action: replaceTags, requiredData: TAGS_TO_REPLACE}),
  // custom — bare reference, no getAction():
  migrateMyFeature,
] as const;
```

**Tips for writing custom migrations:**

- **Process replacements in reverse order** — when making multiple changes in the same template, sort by offset
  descending before applying. Otherwise earlier changes shift offsets for later ones.
- **Always add `templateOffset`** to all `recorder` operations. For inline templates (`template: '...'`) the offset is
  non-zero; for external `.html` files it's 0. Forgetting this breaks inline template migrations.
- **Available utilities** for searching elements: `findElementsByTagName`, `findElementsWithAttribute`,
  `findElementsWithAttributeOnTag`, `hasElementAttribute`, `hasElementAttributeWithValue` (from
  `../../../../utils/templates/elements`). For DOM navigation: `hasAncestor`, `hasChild` (from
  `'../../../utils/templates'`).
- **`filterFn`** in constant-driven utilities has access to the full Parse5 element — you can inspect `el.attrs`,
  `el.tagName`, `el.childNodes`, `el.sourceCodeLocation`.
