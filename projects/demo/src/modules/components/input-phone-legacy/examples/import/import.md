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
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl('+78005553535'),
  });
}
```
