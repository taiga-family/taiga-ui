```ts
import {FormControl, FormGroup} from '@angular/forms';
import {TuiTime} from '@taiga-ui/core';

// ...

@Component({
  // ...
})
export class MyComponent {
  testForm = new FormGroup({
    testValue: new FormControl(new TuiTime(12, 30)),
  });
}
```
