```ts
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_DURATION} from '@taiga-ui/core';

// ...

@NgModule({
  // ...
  providers: [
    // ...
    {
      provide: TUI_ANIMATIONS_DURATION,
      useFactory: () => (inject(TUI_IS_CYPRESS) ? 0 : 300),
    },
  ],
})
export class AppModule {}
```
