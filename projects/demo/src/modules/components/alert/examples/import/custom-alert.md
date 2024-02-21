```ts
import {TuiAlertOptions} from '@taiga-ui/core';
import {TuiPopover} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

//...

export class NotificationExampleComponent {
  private readonly context: TuiPopover<TuiAlertOptions<boolean>, boolean> = inject(POLYMORPHEUS_CONTEXT);

  ok() {
    this.context.completeWith(true);
  }

  cancel() {
    this.context.completeWith(false);
  }
}
```
