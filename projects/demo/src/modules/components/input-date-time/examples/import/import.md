```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiInputDateTime,
  ],
})
export class Example {
  protected value: [TuiDay, TuiTime | null] | null = null;
}
```
