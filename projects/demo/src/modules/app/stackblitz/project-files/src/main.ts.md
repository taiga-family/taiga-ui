```ts
import 'zone.js';

import {importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {TUI_SANITIZER, TuiDialogModule, tuiSvgOptionsProvider} from '@taiga-ui/core';
import {TuiPushModule} from '@taiga-ui/kit';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

import {App} from './app/app.component';

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    importProvidersFrom(TuiDialogModule, TuiPushModule),
    // A workaround because StackBlitz does not support assets
    tuiSvgOptionsProvider({
      path: 'https://taiga-ui.dev/assets/taiga-ui/icons',
    }),
    /**
     * If you use unsafe icons or TuiEditor in your app
     *
     * Take a look at: https://github.com/taiga-family/ng-dompurify
     *
     * This library implements DOMPurify as Angular Sanitizer or Pipe.
     * It delegates sanitizing to DOMPurify and supports the same configuration.
     */
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ],
}).catch(err => console.error(err));
```
