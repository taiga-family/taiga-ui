```ts
import {TuiMobileCalendar, tuiProvideMobileCalendar} from '@taiga-ui/addon-mobile';
import {TuiInputDateModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiMobileCalendar,
  ],
  // If you want it in date picker inputs
  providers: [tuiProvideMobileCalendar()],
  // ...
})
export class Example {}
```
