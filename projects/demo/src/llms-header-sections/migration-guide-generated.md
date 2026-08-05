# Migration Guide

> **Guide to update Taiga UI v{CURRENT_MAJOR} -> v{NEXT_MAJOR}**

## Before You Update

- [ ] Use Node.js LTS, NPM v10 or higher.
- [ ] Update Taiga UI version to latest v{CURRENT_MAJOR}.
- [ ] Update Angular version to v19 or higher.
- [ ] Ensure Prettier’s endOfLine option is set to auto for fix some issues with end of line after migration.

## Updating

- [ ] Run migration schematics

**Angular CLI:**

```bash
ng update @taiga-ui/cdk
```
**Nx CLI:**

```bash
nx migrate @taiga-ui/cdk
nx migrate --run-migrations=migrations.json
```

- [ ] Review all changed code lines. Some of them contain new code comments (something like // TODO: (Taiga UI migration) ). In most cases these comments contain instructions how to manually migrate some deleted entities by new alternative.

- [ ] You can find out that your codebase now contains some imports from @taiga-ui/legacy . This package is a transitional state for many outdated entities before their full removal. Everything you find inside this package in the {NEXT_MAJOR}th major release will be removed in the {NEXT_MAJOR}th one. So, you can just continue to use them for a while. However, some of those components already have modern alternatives – they will be marked by comment with @deprecated tag (most IDEs displays the such entities as stricken-through). We strongly recommend to replace them by new alternatives as soon as possible!

## Troubleshooting


**Problem:** After running the migration schematics, I have a large amount of TypeScript errors TS6133: is declared but its value is never read.

**Solution:** We don't include any code formatting in our schematics on purpose. Otherwise, it will drastically slow down the overall process of schematics execution. So, use well-optimized prettier/eslint rules and power of your IDEs . If you are WebStorm user. Just make right click on the root folder with the codebase of your recently migrated application. Choose "Optimize imports" from the context menu. It will automatically remove all unused imports across all the files in that folder. If you are Visual Studio Code user. Use an Folder source actions extension to trigger built-in Organize Imports action in all files recursively in the root folder with the codebase of your recently migrated application.

**Problem:** I use Yarn or cannot get rid of legacy-peer-deps and I need a workaround. Or, I ran npm install and got Could not resolve dependency (for ng-web-apis , maskito , ng-polymorpheus or ng-event-plugins packages)

**Solution:** Taiga UI depends on many other Taiga Family packages . Yarn and NPM with enabled legacy-peer-deps config do not automatically install transitive peer dependencies. It means that you should manage them manually . Explore package.json of every used Taiga UI package. Find their peerDependencies and ensure that they are installed and their versions are compatible with constraints from Taiga libraries.

**Problem:** I ran nx migrate --run-migrations and got Cannot find module 'ts-morph' error, but my project uses NPM without legacy-peer-deps

**Solution:** Nx issue with ng migrate command. Bump Nx version or just run npm install followed by

**Problem:** Migration fails with FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory

**Solution:** Migration schematics recursively traverse every file and directory. This operation can be memory-intensive. If you encounter this error, try increasing the memory limit for the Node.js process.

**Problem:** I still have some problems with running the basic version of ng update / ng migrate command, I need an approach to execute all schematics manually

**Solution:**

1. Manually update all Taiga UI's packages to v{NEXT_MAJOR} (i.e. just change versions inside your package.json by yourself without any console commands and then run npm install ).
2. Check that node_modules/@taiga-ui/cdk/package.json contains the {NEXT_MAJOR}th major version
3. Execute: or

```bash
```bash
nx migrate @taiga-ui/cdk --from="@taiga-ui/cdk@x.x.x"
nx migrate --run-migrations
```
```
