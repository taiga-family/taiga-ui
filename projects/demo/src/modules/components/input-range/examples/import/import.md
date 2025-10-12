```ts
import {FormsModule} from '@angular/forms';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
  imports: [
    // ...
    FormsModule,
    TuiInputRange,
  ],
  // ...
})
export class Example {
  value = [0, 0];
}
```
