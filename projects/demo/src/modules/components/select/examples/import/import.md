```ts
import {FormsModule} from '@angular/forms';
import {TuiSelect} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiSelect,
  ],
})
export class Example {
  value: null = null;
}
```
