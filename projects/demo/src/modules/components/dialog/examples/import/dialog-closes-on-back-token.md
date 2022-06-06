```ts
import {of} from 'rxjs';
import {TUI_DIALOG_CLOSES_ON_BACK} from '@taiga-ui/cdk';

// ...

@NgModule({
  // ...
  providers: [
    {
      provide: TUI_DIALOG_CLOSES_ON_BACK,
      useValue: of(true),
    },
  ],
})
export class MyModule {}
```
