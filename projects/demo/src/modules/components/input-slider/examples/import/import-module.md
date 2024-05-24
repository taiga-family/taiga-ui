```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputSliderModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputSliderModule,
  ],
  // ...
})
export class MyComponent {}
```
