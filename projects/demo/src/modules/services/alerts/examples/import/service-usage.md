```ts
import {TuiAlertService} from '@taiga-ui/core';
//...

export class MyComponent {
  constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {
    //...

    this.alerts.open('Notification').subscribe({
      complete: () => {
        console.log('Notification is closed');
      },
    });
  }
}
```
