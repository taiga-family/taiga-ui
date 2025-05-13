```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiComboBoxModule,
    TuiDataList,
    TuiDataListWrapper,
  ],
  // ...
})
export class Example {}
```
