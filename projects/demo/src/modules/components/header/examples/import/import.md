```ts
import {Component} from '@angular/core';
import {TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiHeader,
    TuiTitle,
  ],
})
export class Example {}
```
