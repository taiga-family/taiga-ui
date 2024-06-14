```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiRange} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiRange,
  ],
})
class Example {
  testForm = new FormGroup({
    testValue: new FormControl(0),
  });
}
```
