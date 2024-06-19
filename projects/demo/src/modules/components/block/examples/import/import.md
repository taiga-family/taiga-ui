```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiBlockDirective, TuiCheckboxComponent} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiBlockDirective,
    TuiCheckboxComponent, // or TuiRadioComponent
  ],
  // ...
})
export class Example {}
```
