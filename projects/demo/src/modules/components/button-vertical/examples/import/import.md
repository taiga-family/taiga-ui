```ts
import {Component} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonVerticalDirective} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButton,
    TuiButtonVerticalDirective,
  ],
})
export class Example {}
```
