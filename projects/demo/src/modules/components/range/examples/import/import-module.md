```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiRangeModule} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiRangeModule,
  ],
})
class ExampleModule {}
```
