```ts
import {signal} from '@angular/core';
import {TuiDayOfWeek} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core';

@Component({
  standalone: true,
  // ...
  providers: [
    {
      provide: TUI_FIRST_DAY_OF_WEEK,
      useValue: signal(TuiDayOfWeek.Sunday),
    },
  ],
})
export class Example {}
```
