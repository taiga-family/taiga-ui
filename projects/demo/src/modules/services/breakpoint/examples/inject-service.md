```ts
import {Inject} from '@angular/core';
import {TuiBreakpointService} from '@taiga-ui/core';

// ...
export class MyComponent {
  constructor(
    @Inject(TuiBreakpointService)
    private readonly breakpoint$: TuiBreakpointService,
  ) {}
}
```
