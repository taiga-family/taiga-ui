---
name: write-migration
description: >
  Use this skill when writing or reviewing Taiga UI schematics migrations. Covers: analyzing API changes between major
  versions, choosing the right migration utility (attrs-to-replace, inputs-to-remove, identifiers-to-replace,
  tags-to-replace, custom migration functions, etc.), writing tests with snapshots, and avoiding common pitfalls. Invoke
  whenever asked to add, fix, or review a migration in projects/cdk/schematics/.
---

## Where to find the previous major version's source

To understand what existed before the migration, use one of these two approaches (in order of preference):

**Option A — Local checkout** (fastest, works offline): Look for a sibling directory named `../taiga-ui-vN` (e.g.,
`../taiga-ui-v{N-1}` when writing vN migrations). If it exists, read files directly from there.

**Option B — GitHub via `gh` CLI** (when local checkout is absent): Use the scripts in [scripts/](scripts/) — they read
the current major from `package.json` and resolve the correct branch automatically.

```bash
# Browse a file from the previous major
.claude/skills/write-migration/scripts/browse-exports.sh projects/kit/index.ts

# Search for a specific symbol
.claude/skills/write-migration/scripts/search-symbol.sh TuiInputPhone
```

## Step 1: Analyze the change

Before writing a migration, answer these questions:

1. **Find the entity in the previous major version** — using one of the approaches above, check the public API (exports
   in `index.ts`) and usage in demo pages of the previous major branch (e.g., `v{N-1}.x`)
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

## Step 3: Choose the migration utility

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
Is it a STYLE IMPORT in .less/.css?
|-- Deprecated import path, add warning comment? --> style-comments
```

→ Full utility reference with examples: [reference/utilities.md](reference/utilities.md)

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

Run tests: `npx jest schematic-migrate-<name> --updateSnapshot`

Run all vN tests: `npx jest ng-update/vN`

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
- [ ] Chose the simplest utility that works
- [ ] Handled edge cases: `[attr]="false"`, static `attr`, dynamic `[attr]="variable"`
- [ ] Wrote test with representative cases
- [ ] Ran `--updateSnapshot` and verified snapshots are correct
- [ ] Ran all vN tests to check for regressions
- [ ] Updated PR description with before/after table
