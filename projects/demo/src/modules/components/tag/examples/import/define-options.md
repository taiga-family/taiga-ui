```ts
import {tuiTagOptionsProvider} from '@taiga-ui/core';
// ...

@Component({
  standalone: true,
  providers: [
    tuiTagOptionsProvider({
      size: 'l',
      status: 'success',
    }),
  ],
})
export class MyComponent {}
```
