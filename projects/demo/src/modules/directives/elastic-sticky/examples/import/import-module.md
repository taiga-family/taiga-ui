```ts
import {TuiElasticStickyModule} from '@taiga-ui/addon-mobile';
import {TuiScrollbarComponent} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiScrollbarComponent,
    TuiElasticStickyModule,
  ],
  // ...
})
export class MyComponent {}
```
