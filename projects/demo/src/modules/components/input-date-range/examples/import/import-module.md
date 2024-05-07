```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputDateRangeModule} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputDateRangeModule,
  ],
  // ...
})
export class MyComponent {}
```
