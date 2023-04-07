```ts
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiDialogService} from '@taiga-ui/core';

// ...

export class MyComponent {
  constructor(
    @Inject(TuiDialogService)
    private readonly dialogs: TuiDialogService,
  ) {}

  // ...

  open() {
    this.dialogs.open('Hello!').subscribe();
  }
}
```
