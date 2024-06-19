```ts
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {TuiDialogService} from '@taiga-ui/core';
import {inject} from '@angular/core';

// ...

export class Example {
  private readonly dialogs = inject(TuiDialogService);

  // ...

  open() {
    this.dialogs.open('Hello!').subscribe();
  }
}
```
