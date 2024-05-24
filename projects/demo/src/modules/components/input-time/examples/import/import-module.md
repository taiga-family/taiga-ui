```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputTimeModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputTimeModule,
  ],
  // ...
})
export class MyComponent {}
```
