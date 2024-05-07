```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiSliderModule} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiSliderModule,
  ],
  // ...
})
export class MyComponent {}
```
