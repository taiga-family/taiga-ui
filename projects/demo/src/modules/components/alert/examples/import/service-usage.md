```ts
import {TuiAlertService} from '@taiga-ui/core';
//...

export class Example {
  private readonly alerts = inject(TuiAlertService);

  constructor() {
    //...

    this.alerts.open('Notification').subscribe({
      complete: () => {
        console.log('Notification is closed');
      },
    });
  }
}
```
