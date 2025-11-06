```ts
import {TuiAlertContext} from '@taiga-ui/core';
import {injectContext} from '@taiga-ui/polymorpheus';

//...

export class NotificationExample {
  private readonly context = injectContext<TuiAlertContext<boolean, boolean>>();

  ok() {
    this.context.completeWith(true);
  }

  cancel() {
    this.context.completeWith(false);
  }
}
```
