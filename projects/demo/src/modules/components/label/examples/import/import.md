```ts
import {FormsModule} from '@angular/forms';
import {TuiLabelDirective} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiCheckbox,
    TuiLabelDirective,
  ],
  // ...
})
export class Example {}
```
