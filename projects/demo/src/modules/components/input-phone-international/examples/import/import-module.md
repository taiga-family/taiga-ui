```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputPhoneInternationalComponent} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [...FormsModule, ReactiveFormsModule, TuiInputPhoneInternationalComponent],
  // ...
})
export class MyComponent {}
```
