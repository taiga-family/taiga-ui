```ts
import {TuiAlertOptions} from '@taiga-ui/core';
import {TuiPopover} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

//...

export class NotificationExampleComponent {
  constructor(@Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiPopover<TuiAlertOptions<boolean>, boolean>) {}

  ok() {
    this.context.completeWith(true);
  }

  cancel() {
    this.context.completeWith(false);
  }
}
```
