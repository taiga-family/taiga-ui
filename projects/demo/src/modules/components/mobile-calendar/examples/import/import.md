```ts
import {TuiInputDateModule} from '@taiga-ui/kit';
// ...

@NgModule({
  standalone: true,
  imports: [
    // ...
    TuiDialogModule,
    TuiInputDateModule,
    TuiMobileCalendarComponent,
  ],
  providers: [
    {
      provide: TUI_MOBILE_CALENDAR,
      useValue: TuiMobileCalendarDialogComponent,
    },
  ],
  // ...
})
export class MyComponent {}
```
