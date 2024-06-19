```ts
import {TuiAlertOptions} from '@taiga-ui/core';
import {TuiPopover} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';

//...

export class NotificationExample {
  private readonly context: TuiPopover<TuiAlertOptions<boolean>, boolean> = inject(POLYMORPHEUS_CONTEXT);

  ok() {
    this.context.completeWith(true);
  }

  cancel() {
    this.context.completeWith(false);
  }
}
```
