# Taiga UI — i18n

[![npm version](https://img.shields.io/npm/v/@taiga-ui/cdk.svg)](https://npmjs.com/package/@taiga-ui/i18n)
[![Discord](https://img.shields.io/discord/748677963142135818?color=7289DA&label=%23taiga-ui&logo=discord&logoColor=white)](https://discord.gg/Us8d8JVaTg)

[Website](https://taiga-ui.dev) • [Documentation](https://taiga-ui.dev/getting-started) •
[CDK Wiki](https://github.com/tinkoff/taiga-ui/wiki) • [Core team](https://github.com/tinkoff/taiga-ui/#core-team)

<!-- Do not change next line without i18n demo page -->

> A package with tools for Taiga UI library i18n

Supported languages:

| Language             |      Constant name      |
| -------------------- | :---------------------: |
| English (by default) |  TUI_ENGLISH_LANGUAGE   |
| Russian              |  TUI_RUSSIAN_LANGUAGE   |
| Spanish              |  TUI_SPANISH_LANGUAGE   |
| German               |   TUI_GERMAN_LANGUAGE   |
| Turkish              |  TUI_TURKISH_LANGUAGE   |
| Dutch                |   TUI_DUTCH_LANGUAGE    |
| Ukrainian            | TUI_UKRAINIAN_LANGUAGE  |
| French               |   TUI_FRENCH_LANGUAGE   |
| Vietnamese           | TUI_VIETNAMESE_LANGUAGE |
| Portuguese           | TUI_PORTUGUESE_LANGUAGE |
| Italian              |  TUI_ITALIAN_LANGUAGE   |
| Polish               |   TUI_POLISH_LANGUAGE   |
| Chinese              |  TUI_CHINESE_LANGUAGE   |

<!-- Do not change next line without i18n demo page -->

It's a part of [**Taiga UI**](https://github.com/tinkoff/taiga-ui) that is fully-treeshakable Angular UI Kit consisting
of multiple base libraries and several add-ons

## How to install

If you have [@taiga-ui/core](https://npmjs.com/package/@taiga-ui/core) in your app, you do not need to install anything.
i18n package is included as a dependency.

## How to use

You have English by default.

If you want to change it, you need to provide `TUI_LANGUAGE` token in your app.module:

**./app.module.ts**

```ts
import {TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';

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

You can also switch languages on the fly. Use `useFactory` or `useClass` with a service to make a stream of
dictionaries.

## How to add a language

Feel free to add new languages!

1. Go to `languages` folder
2. Copy `english` folder and rename new folder with the name of language you speak
3. Translate entities in files. If you need some clarification, take a look at interfaces of entities. If you need more,
   please write to us via issues or any other way of contact :)

**./serbian/index.ts**

```ts
import {TuiLanguage, TuiLanguagePreview} from '@taiga-ui/i18n';
import {TUI_SERBIAN_LANGUAGE_ADDON_COMMERCE} from './addon-commerce';
import {TUI_SERBIAN_LANGUAGE_ADDON_TABLE} from './addon-table';
import {TUI_ENGLISH_LANGUAGE_ADDON_EDITOR} from './addon-editor';
import {TUI_SERBIAN_LANGUAGE_CORE} from './core';
import {TUI_SERBIAN_LANGUAGE_KIT} from './kit';

const TUI_SERBIAN_LANGUAGE_PREVIEW: TuiLanguagePreview = {
  previewTexts: {rotate: 'rotiraj'},
  zoomTexts: {
    zoomOut: 'odzumiraj',
    zoomIn: 'zumiraj',
    reset: 'reset',
  },
};

export const TUI_SERBIAN_LANGUAGE: TuiLanguage = {
  ...TUI_SERBIAN_LANGUAGE_CORE,
  ...TUI_SERBIAN_LANGUAGE_KIT,
  ...TUI_SERBIAN_LANGUAGE_ADDON_TABLE,
  ...TUI_SERBIAN_LANGUAGE_ADDON_COMMERCE,
  ...TUI_ENGLISH_LANGUAGE_ADDON_EDITOR,
  ...TUI_SERBIAN_LANGUAGE_PREVIEW,
  name: 'serbian',
};
```

**./app.module.ts**

```ts
import {TUI_LANGUAGE} from '@taiga-ui/i18n';
import {TUI_SERBIAN_LANGUAGE} from './serbian';

@NgModule({
  // ...
  providers: [
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_SERBIAN_LANGUAGE),
    },
  ],
})
export class AppModule {}
```

Thank you!
