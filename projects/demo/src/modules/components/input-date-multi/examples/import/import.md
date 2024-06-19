```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputDateMultiModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [
    // ...
    ReactiveFormsModule,
    TuiInputDateMultiModule,
  ],
  // ...
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl([]),
  });
}
```
