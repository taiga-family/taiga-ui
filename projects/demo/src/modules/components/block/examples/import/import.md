```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiBlock, TuiCheckbox} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiBlock,
    TuiCheckbox, // or TuiRadio
  ],
  // ...
})
export class Example {}
```
