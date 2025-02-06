```ts
import {FormsModule} from '@angular/forms';
import {TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiInputSlider,
    TuiNumberFormat,
  ],
  // ...
})
export class Example {
  value = 0;
}
```
