```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputTagModule} from '@taiga-ui/kit';

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
export class MyComponent {}
```
