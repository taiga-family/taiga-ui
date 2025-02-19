```ts
import {Component} from '@angular/core';
import {TuiHeader} from '@taiga-ui/layout';
import {TuiTitle} from '@taiga-ui/core';
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
