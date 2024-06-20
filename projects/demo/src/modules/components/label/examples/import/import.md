```ts
import {FormsModule} from '@angular/forms';
import {TuiLabel} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiCheckbox,
    TuiLabel,
  ],
  // ...
})
export class Example {}
```
