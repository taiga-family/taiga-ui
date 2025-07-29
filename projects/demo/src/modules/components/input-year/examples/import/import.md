```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputYear} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiInputYear,
  ],
})
export class Example {
  value: number | null = null;
}
```
