```ts
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiAlertService} from '@taiga-ui/core';
import {Injector} from '@angular/core';

import {CustomNotificationComponent} from './custom-notification.component';

//...
export class MyComponent {
  constructor(
    @Inject(Injector) private injector: Injector,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
  ) {
    //...
    this.alerts
      .open(new PolymorpheusComponent(CustomNotificationComponent, this.injector), {label: 'Heading'})
      .subscribe();
  }
  //...
}
```
