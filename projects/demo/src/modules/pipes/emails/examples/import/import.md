```ts
import {FormsModule} from '@angular/forms';
import {TuiDataListModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiInputModule} from '@taiga-ui/kit';
import {TuiEmailsPipe} from '@taiga-ui/proprietary';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiEmailsPipe,
    TuiInputModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
  ],
  // ...
})
export class MyComponent {}
```
