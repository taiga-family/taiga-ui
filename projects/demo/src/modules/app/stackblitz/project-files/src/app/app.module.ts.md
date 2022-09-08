```ts
import {NgModule} from '@angular/core';
import {TUI_ICONS_PATH, tuiIconsPathFactory, TUI_SANITIZER} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

import {ALL_TAIGA_UI_MODULES} from './@stackblitz/all-taiga-modules';
import {AppComponent} from './app.component';

@NgModule({
  /**
   * Don't use this approach,
   * it's a workaround for stackblitz
   */
  imports: ALL_TAIGA_UI_MODULES,
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    // A workaround because StackBlitz does not support assets
    {
      provide: TUI_ICONS_PATH,
      useValue: tuiIconsPathFactory('https://taiga-ui.dev/assets/taiga-ui/icons'),
    },
    /**
     * If you use unsafe icons or have kind of WYSISYG editor in your app
     *
     * Take a look at: https://github.com/tinkoff/ng-dompurify
     *
     * This library implements DOMPurify as Angular Sanitizer or Pipe.
     * It delegates sanitizing to DOMPurify and supports the same configuration.
     */
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ],
})
export class AppModule {}
```
