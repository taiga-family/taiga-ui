```ts
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';
// ...
import {CustomTableBarsComponent} from './custom-table-bars.component';

@Component({
  standalone: true,
  // ...
})
export class MyComponent {
  constructor() {
    // ...
    inject(TuiTableBarsService)
      .showTableBar(new PolymorpheusComponent(CustomTableBarsComponent, inject(INJECTOR)))
      .subscribe();
    // ...
  }
}
```
