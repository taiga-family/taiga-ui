# Taiga UI — i18n

[![npm version](https://img.shields.io/npm/v/@taiga-ui/cdk.svg)](https://npmjs.com/package/@taiga-ui/i18n)
[![Discord](https://img.shields.io/discord/748677963142135818?color=7289DA&label=%23taiga-ui&logo=discord&logoColor=white)](https://discord.gg/Us8d8JVaTg)

[Website](https://taiga-ui.dev) • [Documentation](https://taiga-ui.dev/getting-started) • [CDK Wiki](https://github.com/TinkoffCreditSystems/taiga-ui/wiki) • [Core team](https://github.com/TinkoffCreditSystems/taiga-ui/#core-team)

> A package with tools for Taiga UI library i18n

Supported languages:

-   **English**: by default

-   **Russian**: 100%

It's a part of [**Taiga UI**](https://github.com/TinkoffCreditSystems/taiga-ui) that is fully-treeshakable Angular UI Kit consisting of multiple base libraries and several add-ons

## How to install

If you have [@taiga-ui/core](https://npmjs.com/package/@taiga-ui/core) in your app, you do not need to install anything. i18n package is included as a dependency.

## How to use

You have English by default.

If you want to change it, you need to provide `TUI_LANGUAGE` token in your app.module:

```ts
import {TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';

// app.module
@NgModule({
    // ...
    providers: [
        {
            provide: TUI_LANGUAGE,
            useValue: of(TUI_RUSSIAN_LANGUAGE),
        },
    ],
})
export class AppModule {}
```

You can also switch languages on the fly. Use `useFactory` or `useClass` with a service to make a stream of dictionaries.

## How to add a language

Feel free to add new languages!

1. Go to `languages` folder
2. Copy `english` folder and rename new folder with the name of language you speak
3. Translate entities in files. If you need some clarification, take a look at interfaces of entities. If you need more, please write to us via issues or any other way of contact :)

Thank you!

> You do not need to translate "Editor". It is an experimental package
