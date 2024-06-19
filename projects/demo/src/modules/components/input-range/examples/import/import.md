```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputRangeModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputRangeModule,
  ],
  // ...
})
export class Example {}
```
