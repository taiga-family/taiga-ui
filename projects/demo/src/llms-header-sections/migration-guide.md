# Migration Guide

> **Guide to update Taiga UI v{CURRENT_MAJOR} -> v{NEXT_MAJOR}**

## Before You Update

- [ ] Use Node.js LTS, NPM v10 or higher.
- [ ] Update Taiga UI version to latest v{CURRENT_MAJOR}-lts.
- [ ] Update Angular version to v19 or higher.
- [ ] Ensure Prettier endOfLine option is set to auto for fix some issues with end of line after migration.

## Updating

### 1. Run migration schematics

Use your package manager:

**Angular CLI:**

```bash
ng update @taiga-ui/cdk
```

**Nx CLI:**

```bash
nx migrate @taiga-ui/cdk
nx migrate --run-migrations=migrations.json
```

### 2. Review changed code

- [ ] Look for new TODO comments from migration (e.g., `// TODO: (Taiga UI migration)`)
- They contain instructions to manually migrate deleted entities to new alternatives

### 3. Update @taiga-ui/legacy imports

- [ ] Your code may now contain imports from `@taiga-ui/legacy`
- This is a transitional package for outdated entities
- Everything in this package will be removed in the next major release
- [ ] Prefer modern alternatives marked with `@deprecated` tag (shown as stricken-through in IDEs)
- Replace legacy imports with new alternatives as soon as possible

## Troubleshooting

### Unused imports after migration

**Problem:** TypeScript errors after migration: `TS6133: <entityName> is declared but its value is never read`

**Solution:** Taiga UI schematics skip code formatting to avoid slowdown. Use these tools:

- **WebStorm:** Right-click root folder → "Optimize imports"
- **VS Code:** Install "Folder source actions" extension → trigger "Organize Imports" recursively

### Missing transitive peer dependencies

**Problem:** npm install fails with errors for `ng-web-apis`, `maskito`, `ng-polymorpheus`, or `ng-event-plugins`

**Solution:** Yarn and NPM with `legacy-peer-deps` don't install transitive peer dependencies automatically.

Install manually:

1. Check `package.json` of each Taiga UI package
2. Find their `peerDependencies`
3. Ensure they're installed and versions satisfy constraints

### Nx legacy-peer-deps bug

**Problem:** `nx migrate --run-migrations` fails: "Cannot find module 'ts-morph'"

**Solution:** Nx < v22 has a known issue with ng migrate:

- Upgrade Nx to v22+, or
- Run with npm config:

```bash
npm install
npm_config_legacy_peer_deps=false nx migrate --run-migrations
```

### Heap out of memory

**Problem:** Migration fails with "FATAL ERROR: Reached heap limit — JavaScript heap out of memory"

**Solution:** Migration schematics are memory-intensive. Increase Node.js heap size:

```bash
NODE_OPTIONS=--max-old-space-size=8192 nx migrate --run-migrations
```

Adjust `8192` based on your system. The syntax varies by OS and shell.

### Manual run of schematics

**Problem:** Can't use `ng update` / `ng migrate` directly; need to run schematics manually

**Solution:**

1. Update Taiga UI packages to v{NEXT_MAJOR} in `package.json`
2. Run `npm install`
3. Verify `node_modules/@taiga-ui/cdk/package.json` has v{NEXT_MAJOR}

**Option A — Angular CLI:**

```bash
ng update @taiga-ui/cdk --migrate-only --from={CURRENT_MAJOR} --to={NEXT_MAJOR}
```

**Option B — Nx CLI:**

```bash
nx migrate @taiga-ui/cdk --from="@taiga-ui/cdk@{CURRENT_MAJOR}.0.0"
nx migrate --run-migrations
```
