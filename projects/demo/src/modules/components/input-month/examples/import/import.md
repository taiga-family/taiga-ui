```ts
import {TuiInputMonthModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiInputMonthModule,
  ],
  // ...
})
export class MyComponent {
  readonly testForm = new FormGroup({
    testValue: new FormControl(null),
  });
}
```
