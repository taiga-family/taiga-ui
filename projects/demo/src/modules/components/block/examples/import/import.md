```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiBlock, TuiCheckboxComponent} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiBlock,
    TuiCheckboxComponent, // or TuiRadioComponent
  ],
  // ...
})
export class Example {}
```
