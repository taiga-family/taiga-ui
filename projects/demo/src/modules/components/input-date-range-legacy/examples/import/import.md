```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputDateRangeModule,
  ],
  // ...
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl(),
  });
}
```
