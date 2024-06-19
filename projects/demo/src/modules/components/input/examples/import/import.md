```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [
    // ...
    ReactiveFormsModule,
    TuiInputModule,
  ],
  // ...
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });
}
```
