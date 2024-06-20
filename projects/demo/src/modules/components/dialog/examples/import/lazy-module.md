```ts
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {TuiDialogService} from '@taiga-ui/core';

import {MyDialog} from './my-dialog.component.ts';

// ...

@Component({
  // ...
})
export class Example {
  private readonly injector = inject(INJECTOR);
  private readonly dialogs = inject(TuiDialogService);

  // ...
  open() {
    this.dialogs
      .open(
        // this.injector is optional
        new PolymorpheusComponent(MyDialog, this.injector),
      )
      .subscribe();
  }
}
```
