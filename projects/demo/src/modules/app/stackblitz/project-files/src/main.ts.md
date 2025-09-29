```ts
import 'zone.js';
import {provideRouter} from '@angular/router';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {Component} from '@angular/core';
import {provideTaiga, tuiAssetsPathProvider, TuiRoot} from '@taiga-ui/core';

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
    provideRouter([]),
    /**
     * A workaround for StackBlitz only (it does not support assets).
     * Don't use this approach in real-world applications!
     */
    tuiAssetsPathProvider('https://taiga-ui.dev/assets/taiga-ui/icons'),
    provideTaiga(),
    {
      provide: 'Pythons',
      useValue: ['John Cleese', 'Eric Idle', 'Michael Palin', 'Graham Chapman', 'Terry Gilliam', 'Terry Jones'],
    },
  ],
});
```
