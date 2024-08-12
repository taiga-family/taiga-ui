```ts
import 'zone.js';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {Component} from '@angular/core';
import {TuiRoot, tuiAssetsPathProvider} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

import {App} from './app/app.component';

@Component({
  standalone: true,
  selector: 'root',
  imports: [App, TuiRoot],
  template: '<tui-root> <app/> </tui-root>',
})
class Root {}

bootstrapApplication(Root, {
  providers: [
    provideAnimations(),
    NG_EVENT_PLUGINS,
    /**
     * A workaround for StackBlitz only (it does not support assets).
     * Don't use this approach in real-world applications!
     */
    // TODO: remove `next/` after 4.0 release
    tuiAssetsPathProvider('https://taiga-ui.dev/next/assets/taiga-ui/icons'),
  ],
});
```
