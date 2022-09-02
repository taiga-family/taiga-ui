```ts
import {TuiAlertOptions} from '@taiga-ui/core';
import type {TuiDialog} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

//...

export class NotificationExampleComponent {
  constructor(@Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialog<TuiAlertOptions<boolean>, boolean>) {}

  ok() {
    this.context.completeWith(true);
  }

  cancel() {
    this.context.completeWith(false);
  }
}
```
