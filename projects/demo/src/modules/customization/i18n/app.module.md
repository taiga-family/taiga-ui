```ts
import {TuiLanguageName} from '@taiga-ui/i18n/interfaces';
import {tuiDocLanguageSwitcher} from '@taiga-ui/i18n/switch';

@Component({
  standalone: true,
  imports: [
    // ...
  ],
  providers: [
    // ...
    tuiDocLanguageSwitcher(
      /**
       * @note:
       * then the i18n language files will be loaded from node_modules
       */
      async (language: TuiLanguageName): Promise<unknown> =>
        import(
          /* webpackMode: "lazy" */
          /* webpackChunkName: "i18n-lazy-" */
          `@taiga-ui/i18n/languages/${language}`
          // also you can override the paths to your i18n language files
        ),
    ),
  ],
})
export class Example {}
```
