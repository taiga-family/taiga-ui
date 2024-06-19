```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputTagModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputTagModule,
  ],
  // ...
})
export class Example {}
```
