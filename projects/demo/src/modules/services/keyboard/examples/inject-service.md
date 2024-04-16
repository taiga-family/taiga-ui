```ts
import {Inject, Self} from '@angular/core';
import {TuiKeyboardService} from '@taiga-ui/cdk';

// ...
export class MyComponent {
  constructor(
    @Inject(TuiKeyboardService)
    private readonly keyboard: TuiKeyboardService,
  ) {}

  toggle(): void {
    this.keyboard.toggle();
  }
}
```
