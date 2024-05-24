```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputPhoneModule} from '@taiga-ui/legacy';

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
