```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';

// ...

@NgModule({
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
  ],
  // ...
})
export class AppModule {}
```
