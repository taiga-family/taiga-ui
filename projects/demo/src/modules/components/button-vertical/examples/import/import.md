```ts
import {Component} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiButtonVerticalDirective} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButtonDirective,
    TuiButtonVerticalDirective,
  ],
})
export class MyComponent {}
```
