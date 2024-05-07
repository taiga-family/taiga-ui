```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputPhoneModule} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    ReactiveFormsModule,
    TuiInputPhoneModule,
  ],
  // ...
})
export class MyComponent {}
```
