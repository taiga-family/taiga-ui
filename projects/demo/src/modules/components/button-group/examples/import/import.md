```ts
import {Component} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonGroupDirective} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButton,
    TuiButtonGroupDirective,
  ],
})
export class Example {}
```
