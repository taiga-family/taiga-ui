```ts
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {TuiAlertService} from '@taiga-ui/core';
import {inject, INJECTOR} from '@angular/core';

import {CustomNotificationComponent} from './custom-notification.component';

//...
export class Example {
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
