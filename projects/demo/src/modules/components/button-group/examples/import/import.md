```ts
import {Component} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiButtonGroupDirective} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButtonDirective,
    TuiButtonGroupDirective,
  ],
})
export class MyComponent {}
```
