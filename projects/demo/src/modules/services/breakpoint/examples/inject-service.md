```ts
import {Inject, Self} from '@angular/core';
import {TuiBreakpointService} from '@taiga-ui/core';

// ...
export class MyComponent {
  constructor(
    @Self()
    @Inject(TuiBreakpointService)
    private readonly breakpoint$: TuiBreakpointService,
  ) {}
}
```
