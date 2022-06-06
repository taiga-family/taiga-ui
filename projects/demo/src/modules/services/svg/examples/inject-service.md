```ts
import {TuiSvgService, tuiIconTrashLarge} from '@taiga-ui/core';

export class MyComponent {
  constructor(@Inject(TuiSvgService) tuiSvgService: TuiSvgService) {
    tuiSvgService.define({tuiIconTrashLarge});
  }
}
```
