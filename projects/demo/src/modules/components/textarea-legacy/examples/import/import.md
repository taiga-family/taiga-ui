```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiTextareaModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiTextareaModule,
  ],
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl('Content'),
  });
}
```
