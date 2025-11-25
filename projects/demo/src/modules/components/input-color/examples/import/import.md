```ts
import {TuiInputColor} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
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
