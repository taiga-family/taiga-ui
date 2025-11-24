```ts
import {FormsModule} from '@angular/forms';
import {TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiInputDate,
  ],
})
export class Example {
  protected value: TuiDay[] = [];
}
```
