```ts
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputColor} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTextfield,
    TuiInputColor,
  ],
  // ...
})
export class Example {
  readonly testForm = new FormGroup({
    testValue: new FormControl(),
  });
}
```
