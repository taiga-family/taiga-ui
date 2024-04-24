```ts
import {tuiNotificationOptionsProvider} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  providers: [
    tuiNotificationOptionsProvider({
      icon: 'tuiIconHelpCircle',
      status: 'warning',
    }),
  ],
  // ...
})
export class MyComponent {}
```
