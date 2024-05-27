```ts
import {inject} from '@angular/core';
import {TuiKeyboardService} from '@taiga-ui/cdk';

// ...
export class MyComponent {
  private readonly keyboard = inject(TuiKeyboardService);

  toggle(): void {
    this.keyboard.toggle();
  }
}
```
