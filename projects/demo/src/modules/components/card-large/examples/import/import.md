```ts
import {Component} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiAppearance,
    TuiCardLarge,
  ],
})
export class Example {}
```
