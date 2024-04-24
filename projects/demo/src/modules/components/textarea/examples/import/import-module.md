```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiTextAreaModule} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiTextAreaModule,
  ],
})
export class MyComponent {}
```
