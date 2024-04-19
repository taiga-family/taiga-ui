```ts
import {Component} from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiRootModule} from '@taiga-ui/core';

import {ALL_TAIGA_UI_MODULES} from './@stackblitz/all-taiga-modules';

@Component({
  standalone: true,
  selector: `my-app`,
  imports: [
    TuiRootModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    PolymorpheusModule,
    MaskitoDirective,
    ...ALL_TAIGA_UI_MODULES,
  ],
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.less`],
})
export class App {}
```
