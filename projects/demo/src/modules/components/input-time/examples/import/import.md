```ts
import {FormsModule} from '@angular/forms';
import {TuiInputTime} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiInputTime,
  ],
})
export class Example {
  value: TuiTime | null = null;
}
```
