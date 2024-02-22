```ts
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiAlertService} from '@taiga-ui/core';
import {inject, INJECTOR} from '@angular/core';

import {CustomNotificationComponent} from './custom-notification.component';

//...
export class MyComponent {
  constructor() {
    //...
    inject(TuiAlertService)
      .open(new PolymorpheusComponent(CustomNotificationComponent, inject(INJECTOR)), {
        label: 'Heading',
      })
      .subscribe();
  }

  //...
}
```
