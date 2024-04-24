```ts
import {FormsModule} from '@angular/forms';
import {TuiLabelDirective} from '@taiga-ui/experimental';
import {TuiCheckboxComponent} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiCheckboxComponent,
    TuiLabelDirective,
  ],
  // ...
})
export class MyComponent {}
```
