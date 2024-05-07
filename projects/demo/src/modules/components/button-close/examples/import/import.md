```ts
import {Component} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiButtonCloseDirective} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButtonDirective,
    TuiButtonCloseDirective,
  ],
})
export class MyComponent {}
```
