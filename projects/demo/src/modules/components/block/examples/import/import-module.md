```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiBlockDirective, TuiCheckboxComponent} from '@taiga-ui/kit';

// ...

@NgModule({
  imports: [
    // ...
    FormsModule,
    TuiBlockDirective,
    TuiCheckboxComponent, // or TuiRadioComponent
  ],
  // ...
})
export class MyModule {}
```
