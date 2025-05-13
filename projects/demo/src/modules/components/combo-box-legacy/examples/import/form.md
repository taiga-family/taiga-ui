```ts
import {FormControl, FormGroup} from '@angular/forms';

// ...

@Component({
  // ...
})
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl(),
  });
}
```
