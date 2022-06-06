```ts
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiDialogService} from '@taiga-ui/core';
import {Injector} from '@angular/core';
import {MyDialogComponent} from './my-dialog.component.ts';

// ...

export class MyComponent {
  constructor(
    @Inject(Injector) private readonly injector: Injector,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
  ) {}

  // ...
  open() {
    this.dialogService.open(new PolymorpheusComponent(MyDialogComponent, this.injector)).subscribe();
  }
}
```
