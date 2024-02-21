```ts
// ...
import {TuiSvgService, tuiIconTrashLarge} from '@taiga-ui/core';

@Component({
  // ...
})
export class MyComponent {
  constructor() {
    inject(TuiSvgService).define({tuiIconTrashLarge});
  }
}
```
