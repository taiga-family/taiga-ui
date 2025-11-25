```ts
import {FormsModule} from '@angular/forms';
import {TuiTextarea} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiTextarea,
  ],
})
export class Example {
  value = 'Value';
}
```
