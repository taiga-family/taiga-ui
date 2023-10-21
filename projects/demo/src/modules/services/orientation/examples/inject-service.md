```ts
import {Inject} from '@angular/core';
import {TuiOrientationService} from '@taiga-ui/core';

// ...
export class MyComponent {
  constructor(
    @Inject(TuiOrientationService)
    private readonly orientation$: TuiOrientationService,
  ) {}
}
```
