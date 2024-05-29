```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiMultiSelectModule} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiMultiSelectModule,
    TuiDataList,
    TuiDataListWrapper,
  ],
  // ...
})
export class MyComponent {}
```
