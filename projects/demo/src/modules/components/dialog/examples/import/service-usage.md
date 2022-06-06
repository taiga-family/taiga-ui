```ts
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiDialogService} from '@taiga-ui/core';

// ...

export class MyComponent {
  constructor(
    @Inject(TuiDialogService)
    private readonly dialogService: TuiDialogService,
  ) {}

  // ...

  open() {
    this.dialogService.open('Hello!').subscribe();
  }
}
```
