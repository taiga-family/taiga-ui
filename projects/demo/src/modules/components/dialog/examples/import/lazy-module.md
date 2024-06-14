```ts
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {TuiDialogService} from '@taiga-ui/core';

import {MyDialogComponent} from './my-dialog.component.ts';

// ...

@Component({
  // ...
})
export class MyComponent {
  private readonly injector = inject(INJECTOR);
  private readonly dialogs = inject(TuiDialogService);

  // ...
  open() {
    this.dialogs
      .open(
        // this.injector is optional
        new PolymorpheusComponent(MyDialogComponent, this.injector),
      )
      .subscribe();
  }
}
```
