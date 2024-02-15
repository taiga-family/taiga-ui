```ts
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiDialogService} from '@taiga-ui/core';
import {inject} from '@angular/core';

// ...

export class MyComponent {
  private readonly dialogs = inject(TuiDialogService);

  // ...

  open() {
    this.dialogs.open('Hello!').subscribe();
  }
}
```
