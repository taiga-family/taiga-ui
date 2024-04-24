```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputPasswordModule} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
  ],
  // ...
})
export class MyComponent {}
```
