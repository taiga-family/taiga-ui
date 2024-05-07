```ts
import {TuiMobileCalendarModule} from '@taiga-ui/addon-mobile';
import {TuiDialogModule} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiDialogModule,
    TuiMobileCalendarModule,
  ],
  // ...
})
export class MyComponent {}
```
