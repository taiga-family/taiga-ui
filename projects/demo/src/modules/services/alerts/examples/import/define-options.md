```ts
import {TuiNotification, TUI_NOTIFICATION_DEFAULT_OPTIONS, TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core';

// ...

@NgModule({
  providers: [
    {
      provide: TUI_NOTIFICATION_OPTIONS,
      useValue: {
        ...TUI_NOTIFICATION_DEFAULT_OPTIONS,
        autocloseTimeout: 7000,
        label: ({$implicit}: any) => ($implicit === TuiNotification.Error ? 'Error' : 'Info'),
        status: TuiNotification.Error,
        hasIcon: false,
        hasCloseButton: false,
      },
    },
  ],
  //  ...
})
export class MyModule {}
```
