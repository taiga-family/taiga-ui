```ts
import {tuiNotificationOptionsProvider} from '@taiga-ui/core';

// ...

@NgModule({
  providers: [
    tuiNotificationOptionsProvider({
      label: ({status}: any) => status[0].toUpperCase() + status.slice(1),
      status: 'error',
      autoClose: 7000,
    }),
  ],
  //  ...
})
export class MyModule {}
```
