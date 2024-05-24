```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputDateTimeModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputDateTimeModule,
  ],
  // ...
})
export class MyComponent {}
```
