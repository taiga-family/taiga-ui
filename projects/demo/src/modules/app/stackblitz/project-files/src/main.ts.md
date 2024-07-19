```ts
import 'zone.js';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {Component} from '@angular/core';
import {TuiRoot} from '@taiga-ui/core';

import {App} from './app/app.component';

@Component({
  standalone: true,
  selector: 'root',
  imports: [App, TuiRoot],
  template: '<tui-root> <app/> </tui-root>',
})
class Root {}

bootstrapApplication(Root, {
  providers: [provideAnimations()],
});
```
