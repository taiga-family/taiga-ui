import"./chunk-HU6DUUP4.js";var A=`\`\`\`ts
import {TUI_LANGUAGE} from '@taiga-ui/i18n';
import {TUI_SERBIAN_LANGUAGE} from './serbian';

bootstrapApplication(App, {
  providers: [
    // ...
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_SERBIAN_LANGUAGE),
    },
  ],
}).catch((err: unknown) => console.error(err));
\`\`\`
`;export{A as default};
