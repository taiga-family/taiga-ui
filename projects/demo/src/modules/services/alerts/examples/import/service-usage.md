```ts
import {TuiAlertService} from '@taiga-ui/core';
//...

export class MyComponent {
  constructor(@Inject(TuiAlertService) private readonly alertService: TuiAlertService) {
    //...

    this.alertService.open('Notification').subscribe({
      complete: () => {
        console.log('Notification is closed');
      },
    });
  }
}
```
