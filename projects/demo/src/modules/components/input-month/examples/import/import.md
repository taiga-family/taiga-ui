```ts
import {FormsModule} from '@angular/forms';
import {TuiInputMonth} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiInputMonth,
  ],
})
export class Example {
  value: TuiMonth | null = null;
}
```
