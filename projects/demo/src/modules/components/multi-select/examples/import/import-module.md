```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiMultiSelectModule} from '@taiga-ui/kit';

// ...

@NgModule({
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiMultiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
  ],
  // ...
})
export class MyModule {}
```
