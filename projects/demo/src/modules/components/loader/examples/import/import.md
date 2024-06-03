```ts
import {TuiLoaderComponent} from '@taiga-ui/core';

@Component({
  standalone: true,
  imports: [
    // ...
    TuiLoaderComponent,
  ],
  providers: [
    tuiLoaderOptionsProvider({
      size: 'l',
      inheritColor: false,
      overlay: true,
    }),
  ],
})
export class MyComponent {}
```
