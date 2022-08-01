```ts
import {TuiLanguageName} from '@taiga-ui/i18n/interfaces';
import {tuiLanguageSwitcher} from '@taiga-ui/i18n/switch';

@NgModule({
  imports: [
    // ...
  ],
  providers: [
    // ...
    tuiLanguageSwitcher(
      /**
       * @note:
       * then the i18n language files will be loaded from node_modules
       */
      async (language: TuiLanguageName): Promise<unknown> =>
        import(
          /* webpackMode: "lazy" */
          /* webpackChunkName: "i18n-lazy-" */
          /* webpackExports: ["named"] */
          `@taiga-ui/i18n/languages/${language}`
          // also you can override the paths to your i18n language files
        ),
    ),
  ],
})
export class AppModule {}
```
