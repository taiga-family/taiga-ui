```ts
import {tuiAlertOptionsProvider} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  providers: [
    tuiAlertOptionsProvider({
      label: ({status}: any) => status[0].toUpperCase() + status.slice(1),
      appearance: 'error',
      autoClose: 7000,
    }),
  ],
  //  ...
})
export class Example {}
```
