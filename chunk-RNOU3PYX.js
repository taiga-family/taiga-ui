import"./chunk-HU6DUUP4.js";var n=`\`\`\`ts
import {tuiLanguageSwitcher, TuiLanguageName} from '@taiga-ui/i18n';

bootstrapApplication(App, {
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
          \`@taiga-ui/i18n/languages/\${language}\`
          // also you can override the paths to your i18n language files
        ),
    ),
  ],
}).catch((err: unknown) => console.error(err));
\`\`\`
`;export{n as default};
