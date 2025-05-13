```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiSelect, TuiComboBox} from '@taiga-ui/kit';

@Component({
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiComboBox,
  ],
})
export class Example {
  items = ['Option 1', 'Option 2', 'Option 3'];
  value: string | null = null;
}
```
