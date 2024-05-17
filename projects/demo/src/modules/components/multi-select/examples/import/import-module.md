```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiMultiSelectModule} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiMultiSelectModule,
    TuiDataList,
    TuiDataListWrapperModule,
  ],
  // ...
})
export class MyComponent {}
```
