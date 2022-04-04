```ts
import {tuiTagOptionsProvider} from '@taiga-ui/core';
// ...

@NgModule({
  providers: [
    tuiTagOptionsProvider({
      size: 'l',
      status: 'success',
    }),
  ],
})
export class MyModule {}
```
