```ts
import {FormsModule} from '@angular/forms';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiInputChip,
  ],
})
export class Example {
  value = [];
}
```
