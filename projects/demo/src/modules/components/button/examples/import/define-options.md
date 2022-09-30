```ts
import {TUI_BUTTON_OPTIONS} from '@taiga-ui/core';

@NgModule({
  providers: [
    {
      provide: TUI_BUTTON_OPTIONS,
      useValue: {
        appearance: 'flat',
        size: 'm',
        shape: 'rounded',
      },
    },
  ],
  // ...
})
export class MyModule {}
```
