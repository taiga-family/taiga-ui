import"./chunk-HU6DUUP4.js";var p=`\`\`\`ts
import {TUI_DARK_MODE_KEY} from '@taiga-ui/core';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: TUI_DARK_MODE_KEY,
      // Override the default 'tuiDark' localStorage key
      useValue: 'myAppTheme',
    },
  ],
});
\`\`\`
`;export{p as default};
