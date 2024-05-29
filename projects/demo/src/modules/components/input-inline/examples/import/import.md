```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputInlineComponent} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    ReactiveFormsModule,
    TuiInputInlineComponent,
  ],
  // ...
})
export class MyComponent {}
```
