```ts
import {FormsModule} from '@angular/forms';
import {TuiCheckboxModule, TuiLabelDirective} from '@taiga-ui/experimental';

// ...

@NgModule({
  imports: [
    // ...
    FormsModule,
    TuiCheckboxModule,
    TuiLabelDirective,
  ],
  // ...
})
export class MyModule {}
```
