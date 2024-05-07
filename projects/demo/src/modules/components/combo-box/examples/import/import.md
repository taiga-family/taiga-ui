```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiComboBoxModule, TuiDataListWrapperModule} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiComboBoxModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
  ],
  // ...
})
export class MyComponent {}
```
