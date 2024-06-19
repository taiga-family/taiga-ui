```ts
import {Component} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButton,
    TuiButtonClose,
  ],
})
export class Example {}
```
