```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiInputChip,
  ],
})
export class Example {
  value = [];
}
```
