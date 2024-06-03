```ts
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';

import {CustomTableBarsComponent} from './custom-table-bars.component';

// ...

export class LazyModule {
  constructor() {
    // ...
    inject(TuiTableBarsService)
      .showTableBar(new PolymorpheusComponent(CustomTableBarsComponent, inject(INJECTOR)))
      .subscribe();
    // ...
  }
}
```
