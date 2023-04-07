```ts
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiAlertService} from '@taiga-ui/core';
import {CustomNotificationComponent} from './custom-notification.component';
//...

export class MyComponent {
  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {
    //...

    this.alerts.open(new PolymorpheusComponent(CustomNotificationComponent)).subscribe({
      complete: () => {
        console.log('Notification is closed');
      },
    });
  }
}
```
