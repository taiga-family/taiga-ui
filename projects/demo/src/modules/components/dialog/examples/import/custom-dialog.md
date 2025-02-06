```ts
import {TuiDialogContext} from '@taiga-ui/core';
import {injectContext} from '@taiga-ui/polymorpheus';

// ...

export class Example {
  public readonly context = injectContext<TuiDialogContext<boolean>>();

  ok() {
    this.context.completeWith(true);
  }

  cancel() {
    this.context.completeWith(false);
  }
}
```
