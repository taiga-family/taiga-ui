```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiSlider} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiSlider,
  ],
  // ...
})
export class MyComponent {
  readonly control = new FormControl(1);
}
```
