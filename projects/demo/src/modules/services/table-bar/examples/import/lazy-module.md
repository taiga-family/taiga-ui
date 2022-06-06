```ts
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';
import {Injector} from '@angular/core';
import {CustomTableBarsComponent} from 'customTableBars.component';
// ...

export class LazyModule {
  constructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {
    // ...
    this.tableBarsService.showTableBar(new PolymorpheusComponent(CustomTableBarsComponent, this.injector)).subscribe();
    // ...
  }
}
```
