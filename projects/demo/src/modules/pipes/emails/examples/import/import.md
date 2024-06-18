```ts
import {FormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiInputModule} from '@taiga-ui/kit';
import {TuiEmailsPipe} from '@taiga-ui/proprietary';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiEmailsPipe,
    TuiInputModule,
    TuiDataList,
    TuiDataListWrapper,
  ],
  // ...
})
export class MyComponent {}
```
