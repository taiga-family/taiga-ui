```ts
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiEmailsPipe} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    NgIf,
    FormsModule,
    TuiEmailsPipe,
    TuiInputModule,
    TuiDataList,
    TuiDataListWrapper,
  ],
  // ...
})
export class Example {}
```
