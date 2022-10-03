# `@stackblitz`-folder description

## DON'T USE THIS APPROACH FOR YOUR APPLICATION!

Stackblitz has a lot of limitations. All files inside this folder are a workaround for stackblitz only. They are awful
and must not exist in real-world applications.

## Problem descriptions

### `styles`-folder

Unfortunately, Stackblitz can't properly process relative imports inside `.less`-files of libraries. It throws error:

```
Error in turbo_modules/@taiga-ui/core@3.4.0/styles/theme/wrapper/icon.less (1:0)
Could not import ../../taiga-ui-local.less from /~/src/app/@stackblitz/styles/taiga-ui-stackblitz.less
```

See https://github.com/stackblitz/core/issues/1828

### `all-taiga-modules.ts`

We don't have a nice way to import only required modules for every stackblitz-example. That is why we import all of
them. We understand that it's a bad practice, and we don't recommend you to do the same. But it easy workaround to keep
all examples up-to-date without time-consuming manual efforts.
