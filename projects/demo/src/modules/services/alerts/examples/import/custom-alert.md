```ts
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {TuiNotificationContentContext} from '@taiga-ui/core';

//...

export class NotificationExampleComponent {
  constructor(@Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiNotificationContentContext<boolean>) {}

  ok() {
    this.context.emitAndCloseHook(true);
  }

  cancel() {
    this.context.emitAndCloseHook(false);
  }
}
```
