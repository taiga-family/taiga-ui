```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputPassword} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    ReactiveFormsModule,
    TuiInputPassword,
  ],
})
export class Example {
  readonly form = new FormGroup({
    value: new FormControl(''),
  });
}
```
