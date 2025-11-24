```ts
import {FormsModule} from '@angular/forms';
import {TuiNumberFormat} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiInputSlider,
    TuiNumberFormat,
  ],
  // ...
})
export class Example {
  value = 0;
}
```
