```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, TuiInputNumberModule],
  // ...
})
export class MyComponent {}
```
