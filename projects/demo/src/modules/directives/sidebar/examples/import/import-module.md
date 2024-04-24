```ts
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSidebarModule,
    TuiActiveZoneDirective,
  ],
  // ...
})
export class MyComponent {}
```
