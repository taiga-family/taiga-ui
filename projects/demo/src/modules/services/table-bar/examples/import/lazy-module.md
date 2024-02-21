```ts
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';
import {inject, Injector} from '@angular/core';
import {CustomTableBarsComponent} from 'customTableBars.component';

// ...

export class LazyModule {
  constructor() {
    // ...
    inject(TuiTableBarsService)
      .showTableBar(new PolymorpheusComponent(CustomTableBarsComponent, inject(Injector)))
      .subscribe();
    // ...
  }
}
```
