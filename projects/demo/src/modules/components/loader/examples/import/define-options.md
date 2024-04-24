```ts
import {tuiLoaderOptionsProvider} from '@taiga-ui/core';
// ...

@Component({
  standalone: true,
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
