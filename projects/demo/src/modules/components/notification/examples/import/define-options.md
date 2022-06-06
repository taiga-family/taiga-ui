```ts
import {TuiNotification, TUI_NOTIFICATION_DEFAULT_OPTIONS, TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core';

// ...

@NgModule({
  providers: [
    {
      provide: TUI_NOTIFICATION_OPTIONS,
      useValue: {
        ...TUI_NOTIFICATION_DEFAULT_OPTIONS,
        status: TuiNotification.Error,
        hasIcon: false,
      },
    },
  ],
  // ...
})
export class MyModule {}
```
