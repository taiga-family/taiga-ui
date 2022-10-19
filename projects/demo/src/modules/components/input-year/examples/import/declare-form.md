```ts
import {FormControl, FormGroup} from '@angular/forms';

// ...

@Component({
  // ...
})
export class MyComponent {
  readonly testForm = new FormGroup({
    testValue: new FormControl(null),
  });
}
```
