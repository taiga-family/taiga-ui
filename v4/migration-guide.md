# Migration guide

## Prerequisites

- [Update Angular](https://angular.dev/update-guide)
version to
**v16**
or higher.

- Use npm
**v7**
or higher. Don't use
[legacy-peer-deps](https://docs.npmjs.com/cli/v7/using-npm/config#legacy-peer-deps)
in your
`.npmrc`
-file or with
`npm install`
command.

If you use Yarn or cannot get rid of
`legacy-peer-deps`
flag – this step cannot be skipped, but you should be ready to make some
**additional manual efforts**
to resolve all transitive peer dependencies.

See
this guide
from
**Troubleshooting**
section.

- Update all Taiga UI packages to the latest
[v3](https://www.npmjs.com/package/@taiga-ui/cdk/v/v3-lts)
version.

- Ensure
[Prettier’s](https://prettier.io/docs/en/options.html#end-of-line)
`endOfLine`
option is set to
`auto`
for fix some issues with end of line after migration.

## Run migration schematics

This release introduces a lot of breaking changes. We put in a lot of effort to make updating easier for
you. We wrote a bunch of schematics that automatically go through your entire project and fix most of the
breaking changes.

### Angular CLI

```
ng update @taiga-ui/cdk
```

### Nx CLI

```
nx migrate @taiga-ui/cdk
```

## Some final manual steps

- Review all changed code lines. Some of them contain new code comments (something like
`// TODO: (Taiga UI migration)`
). In most cases these comments contain instructions how to manually migrate some deleted entities by
new alternative.

- You can find out that your codebase now contains some imports from
`@taiga-ui/legacy`
. This package is a transitional state for many outdated entities before their full removal. Everything
you find inside this package in the fourth major release will be removed in the fifth one. So, you can
just continue to use them for a while. However, some of those components already have modern
alternatives – they will be marked by comment with
`@deprecated`
tag (most IDEs displays the such entities as stricken-through). We strongly recommend to replace them by
new alternatives as soon as possible!

## Troubleshooting

After running the migration schematics, I have a large amount of TypeScript errors
`TS6133: <entityName> is declared but its value is never read.`

We don't include any code formatting in our schematics on purpose. Otherwise, it will
drastically slow down the overall process of schematics execution. So,
**use well-optimized prettier/eslint rules and power of your IDEs**
.

If you are WebStorm user.
Just make right click on the root folder with the codebase of your recently migrated
application. Choose
[_"Optimize imports"_](https://blog.jetbrains.com/webstorm/2018/05/optimize-imports-in-webstorm/#optimize-all-imports)
from the context menu. It will automatically remove all unused imports across all the files in
that folder.

If you are Visual Studio Code user.
Use an
[Folder source actions](https://marketplace.visualstudio.com/items?itemName=bierner.folder-source-actions)
extension to trigger built-in
[_Organize Imports_](https://code.visualstudio.com/docs/languages/javascript#_organize-imports)
action in all files recursively in the root folder with the codebase of your recently migrated
application.

I use Yarn or cannot get rid of
`legacy-peer-deps`
. I need a workaround.

I ran
`npm install`
and got
`Could not resolve dependency`
(for
`ng-web-apis`
,
`maskito`
,
`ng-polymorpheus`
or
`ng-event-plugins`
packages).

Taiga UI depends on many other
Taiga Family packages
.

Yarn and NPM with enabled
`legacy-peer-deps`
config do not automatically install transitive peer dependencies. It means that you should
manage them
**manually**
. Explore
`package.json`
of every used Taiga UI package. Find their
`peerDependencies`
and ensure that they are installed and their versions are compatible with constraints from Taiga
libraries.

I ran
`nx migrate --run-migrations`
and got
`Cannot find module 'ts-morph'`
error.

But my project uses NPM
**without**
`legacy-peer-deps`
!

Command
`ng migrate`
has known
[issue](https://github.com/nrwl/nx/issues/26675)
. Just run
`npm install`
again and run

```
npm_config_legacy_peer_deps=false nx migrate --run-migrations
```

I still have some problems with running the basic version of
`ng update`
/
`ng migrate`
command. I need an approach to execute all schematics manually.

- Manually update all Taiga UI's packages to
`v4`
(i.e. just change versions inside your
`package.json`
by yourself without any console commands and then run
`npm install`
).

- Check that
`node_modules/@taiga-ui/cdk/package.json`
contains the 4th major version

- Execute:

```
ng update @taiga-ui/cdk --migrate-only --from=3 --to=4
```

or

```
nx migrate @taiga-ui/cdk --from="@taiga-ui/cdk@3.0.0"
nx migrate --run-migrations
```
