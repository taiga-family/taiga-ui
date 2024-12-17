```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiNumberFormat} from '@taiga-ui/core';
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, TuiInputNumber, TuiNumberFormat],
  providers: [
    /**
     * (Optional)
     * Customize default behavior for all InputNumber-s
     * inside specific Dependency Injection scope
     */
    tuiInputNumberOptionsProvider({
      min: 0,
      max: 100,
      postfix: '%',
    }),
  ],
})
export class Example {
  protected readonly control = new FormControl(42);
}
```
