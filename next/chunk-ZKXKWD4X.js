import"./chunk-HU6DUUP4.js";var e=`\`\`\`ts
import {tuiLanguageSwitcher, TuiLanguageName} from '@taiga-ui/i18n';

bootstrapApplication(App, {
  providers: [
    // ...
    tuiLanguageSwitcher(async (language: TuiLanguageName): Promise<unknown> => {
      switch (language) {
        case 'belarusian':
          return import('@taiga-ui/i18n/languages/belarusian');
        case 'chinese':
          return import('@taiga-ui/i18n/languages/chinese');
        case 'dutch':
          return import('@taiga-ui/i18n/languages/dutch');
        case 'french':
          return import('@taiga-ui/i18n/languages/french');
        case 'german':
          return import('@taiga-ui/i18n/languages/german');
        case 'italian':
          return import('@taiga-ui/i18n/languages/italian');
        case 'polish':
          return import('@taiga-ui/i18n/languages/polish');
        case 'portuguese':
          return import('@taiga-ui/i18n/languages/portuguese');
        case 'russian':
          return import('@taiga-ui/i18n/languages/russian');
        case 'spanish':
          return import('@taiga-ui/i18n/languages/spanish');
        case 'turkish':
          return import('@taiga-ui/i18n/languages/turkish');
        case 'ukrainian':
          return import('@taiga-ui/i18n/languages/ukrainian');
        case 'vietnamese':
          return import('@taiga-ui/i18n/languages/vietnamese');

        case 'serbian': // custom language for example
          return import('@my-scope/serbian-language');

        default:
          return import('@taiga-ui/i18n/languages/english');
      }
    }),
  ],
}).catch((err: unknown) => console.error(err));
\`\`\`
`;export{e as default};
