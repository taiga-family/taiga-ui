```ts
import {FormsModule} from '@angular/forms';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
  imports: [
    // ...
    FormsModule,
    TuiInputDateTime,
  ],
})
export class Example {
  protected value: [TuiDay, TuiTime | null] | null = null;
}
```
