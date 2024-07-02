```ts
import {NgModule} from '@angular/core';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';

import {ALL_TAIGA_UI_MODULES} from './@stackblitz/all-taiga-modules';
import {App} from './app.component';

@NgModule({
  /**
   * Don't use this approach,
   * it's a workaround for stackblitz
   */
  imports: ALL_TAIGA_UI_MODULES,
  declarations: [App],
  bootstrap: [App],
})
export class AppModule {}
```
