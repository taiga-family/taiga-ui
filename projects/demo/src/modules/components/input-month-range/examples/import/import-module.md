```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputMonthRangeModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputMonthRangeModule,
  ],
  // ...
})
export class MyComponent {}
```
