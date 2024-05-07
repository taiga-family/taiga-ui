```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputPhoneInternationalModule} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [...FormsModule, ReactiveFormsModule, TuiInputPhoneInternationalModule],
  // ...
})
export class MyComponent {}
```
