# `@stackblitz`-folder description

## DON'T USE THIS APPROACH FOR YOUR APPLICATION!

Stackblitz has a lot of limitations. All files inside this folder are a workaround for stackblitz only. They are awful
and must not exist in real-world applications.

## Problem descriptions

### `styles`-folder

Some our examples use less-imports from `@taiga-ui/core`-package. Unfortunately, Stackblitz can't properly run this file

**app.style.less**:

```less
@import '~@taiga-ui/core/styles/taiga-ui-local';
```

### `all-taiga-modules.ts`

We don't have a nice way to import only required modules for every stackblitz-example. That is why we import all of
them. We understand that it's a bad practice, and we don't recommend you to do the same. But it easy workaround to keep
all examples up-to-date without time-consuming manual efforts.
