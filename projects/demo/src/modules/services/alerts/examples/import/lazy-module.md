```ts
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiNotificationsService} from '@taiga-ui/core';
import {Injector} from '@angular/core';
import {CustomNotificationComponent} from 'customNotification.component';

//...
export class MyComponent {
  constructor(
    @Inject(Injector) private injector: Injector,
    @Inject(TuiAlertService) private readonly alertService: TuiAlertService,
  ) {
    //...
    this.alertService
      .open(new PolymorpheusComponent(CustomNotificationComponent, this.injector), {label: 'Heading'})
      .subscribe();
  }
  //...
}
```
