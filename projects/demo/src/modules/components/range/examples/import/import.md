```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiRangeComponent} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiRangeComponent,
  ],
})
class ExampleModule {
  testForm = new FormGroup({
    testValue: new FormControl(0),
  });
}
```
