```ts
import {tuiLoaderOptionsProvider} from '@taiga-ui/core';
// ...

@NgModule({
  providers: [
    tuiLoaderOptionsProvider({
      size: 'l',
      inheritColor: false,
      overlay: true,
    }),
  ],
})
export class MyModule {}
```
