```ts
import {TuiDayOfWeek} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core';

// ...
@NgModule({
  // ...
  providers: [
    {
      provide: TUI_FIRST_DAY_OF_WEEK,
      useValue: TuiDayOfWeek.Sunday,
    },
  ],
})
export class MyModule {}
```
