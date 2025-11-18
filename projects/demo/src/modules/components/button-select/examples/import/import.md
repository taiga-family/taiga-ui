```ts
import {Component} from '@angular/core';
import {TuiButtonSelect} from '@taiga-ui/kit';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButton,
    TuiButtonSelect,
    TuiDropdown,
  ],
})
export class Example {}
```
