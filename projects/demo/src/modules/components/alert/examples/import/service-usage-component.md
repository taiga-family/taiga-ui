```ts
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {TuiAlertService} from '@taiga-ui/core';
import {CustomNotificationComponent} from './custom-notification.component';
import {inject} from '@angular/core';

//...

export class MyComponent {
  private readonly alerts = inject(TuiAlertService);

  constructor() {
    //...

    this.alerts.open(new PolymorpheusComponent(CustomNotificationComponent)).subscribe({
      complete: () => {
        console.log('Notification is closed');
      },
    });
  }
}
```
