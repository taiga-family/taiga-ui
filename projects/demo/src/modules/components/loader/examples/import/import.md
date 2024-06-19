```ts
import {TuiLoader} from '@taiga-ui/core';

@Component({
  standalone: true,
  imports: [
    // ...
    TuiLoader,
  ],
  providers: [
    tuiLoaderOptionsProvider({
      size: 'l',
      inheritColor: false,
      overlay: true,
    }),
  ],
})
export class Example {}
```
