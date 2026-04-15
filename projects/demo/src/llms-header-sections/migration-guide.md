# Migration Guide

> **Guide to update Taiga UI v4 → v5**

## Before You Update

- [ ] Use Node.js LTS, NPM v10 or higher
- [ ] Update Taiga UI version to the latest v4 LTS
- [ ] Update Angular version to v19 or higher
- [ ] Ensure Prettier's `endOfLine` option is set to `auto` to fix some issues with end of line after migration

## Updating

### Step 1: Run Migration Schematics

Run the migration schematics to automatically update your codebase:

```bash
ng update @taiga-ui/cdk --migrate-only --from=4 --to=5
```

Or with Nx:

```bash
nx migrate @taiga-ui/cdk --from=4 --to=5
nx migrate --run-migrations
```

### Step 2: Review Changed Code

Review all changed code lines. Some contain new code comments like:

```typescript
// TODO: (Taiga UI migration)
```

In most cases, these comments contain instructions for manually migrating deleted entities to their new alternatives.

### Step 3: Handle Legacy Package

You may find imports from `@taiga-ui/legacy`. This package is transitional for outdated entities before their full
removal.

- Everything in this package in v5 will be removed in v6
- Components with `@deprecated` tag have modern alternatives (IDEs display them as strikethrough)
- **Recommendation**: Replace deprecated components with new alternatives as soon as possible

## Troubleshooting

### Unused Imports After Migration

**Problem**: After running migration schematics, you have many
`TS6133: <entityName> is declared but its value is never read` errors.

**Solution**: The schematics don't include code formatting on purpose (to maintain speed). Use your IDE's import
optimization:

- **WebStorm**: Right-click on root folder → "Optimize imports"
- **VS Code**: Use "Folder source actions" extension to trigger "Organize Imports" recursively

### Missing Transitive Peer Dependencies

**Problem**: Using Yarn or `legacy-peer-deps` and getting `Could not resolve dependency` errors for packages like
`ng-web-apis`, `maskito`, `ng-polymorpheus`, or `ng-event-plugins`.

**Solution**: Yarn and NPM with `legacy-peer-deps` don't automatically install transitive peer dependencies. You must:

1. Explore `package.json` of every used Taiga UI package
2. Find their `peerDependencies`
3. Ensure they are installed and versions are compatible with Taiga UI constraints

### Nx Legacy-Peer-Deps Bug

**Problem**: Running `nx migrate --run-migrations` fails with `Cannot find module 'ts-morph'` error.

**Solution**: Nx < v22 has a known issue with `ng migrate` command. Either:

- Bump Nx version to v22+
- Or run: `npm_config_legacy_peer_deps=false nx migrate --run-migrations`

### Heap Out of Memory

**Problem**: Migration fails with `FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory`.

**Solution**: Migration schematics are memory-intensive. Increase Node.js memory limit:

```bash
NODE_OPTIONS=--max-old-space-size=8192 nx migrate --run-migrations
```

### Manual Schematics Execution

**Problem**: Need to run schematics manually due to issues with `ng update` / `ng migrate`.

**Solution**:

1. Manually update all Taiga UI packages to v5 in `package.json`
2. Run `npm install`
3. Verify `node_modules/@taiga-ui/cdk/package.json` contains v5
4. Execute:
   ```bash
   ng update @taiga-ui/cdk --migrate-only --from=4 --to=5
   ```
   Or with Nx:
   ```bash
   nx migrate @taiga-ui/cdk --from=4 --to=5
   nx migrate --run-migrations
   ```
