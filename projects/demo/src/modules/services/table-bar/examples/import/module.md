```ts
import {TuiTableBarsHostModule} from '@taiga-ui/addon-tablebars';
import {TuiRootComponent} from '@taiga-ui/core';
// ...

@Component({
  standalone: true,
  imports: [
    TuiRootComponent,
    TuiTableBarsHostModule,
    // ...
  ],
  // ...
})
export class AppComponent {}
```
