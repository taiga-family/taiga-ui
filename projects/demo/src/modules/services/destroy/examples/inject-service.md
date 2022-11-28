```ts
import {Inject, Self} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';

// ...
export class MyComponent {
  constructor(
    @Self()
    @Inject(TuiDestroyService)
    private readonly destroy$: TuiDestroyService,
  ) {}
}
```
