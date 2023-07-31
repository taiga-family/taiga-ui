```ts
import {tuiNotificationOptionsProvider} from '@taiga-ui/core';

// ...

@NgModule({
  providers: [
    tuiNotificationOptionsProvider({
      icon: 'tuiIconHelpCircle',
      status: 'warning',
    }),
  ],
  // ...
})
export class MyModule {}
```
