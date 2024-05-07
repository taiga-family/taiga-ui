```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputMonthRangeModule} from '@taiga-ui/kit';

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
