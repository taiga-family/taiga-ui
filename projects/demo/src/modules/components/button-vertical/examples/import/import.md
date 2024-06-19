```ts
import {Component} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonVertical} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButton,
    TuiButtonVertical,
  ],
})
export class Example {}
```
