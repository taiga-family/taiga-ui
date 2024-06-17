```ts
import {TuiMobileCalendar, tuiProvideMobileCalendar} from '@taiga-ui/addon-mobile';
import {TuiInputDateModule} from '@taiga-ui/legacy';

// ...

@NgModule({
  standalone: true,
  imports: [
    // ...
    TuiMobileCalendar,
  ],
  // If you want it in date picker inputs
  providers: [tuiProvideMobileCalendar()],
  // ...
})
export class MyComponent {}
```
