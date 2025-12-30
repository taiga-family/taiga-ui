```ts
import {TuiInputPin} from '@taiga-ui/kit';

// ...

@Component({
  imports: [
    // ...
    TuiInputPin,
  ],
  // ...
})
export class Example {
  readonly testForm = new FormGroup({
    testValue: new FormControl(null),
  });
}
```
