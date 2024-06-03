```ts
import {TuiInputYearModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiInputYearModule,
  ],
  // ...
})
export class MyComponent {
  readonly testForm = new FormGroup({
    testValue: new FormControl(null),
  });
}
```
