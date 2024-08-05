```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

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
export class Example {
  testForm = new FormGroup({
    testValue: new FormControl(),
  });
}
```
