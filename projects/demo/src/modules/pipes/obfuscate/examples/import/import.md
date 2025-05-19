```ts
import {tuiObfuscateOptionsProvider, TuiObfuscatePipe} from '@taiga-ui/cdk';

//...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiObfuscatePipe,
  ],
  //  ...
  providers: [
    tuiObfuscateOptionsProvider({
      default: ({length}, symbol = '*') => symbol.repeat(length),
      recipes: {
        city: ({length}) => 'x'.repeat(length),
        phone: ({length}) => '*'.repeat(length),
      },
    }),
  ],
})
export class Example {}
```
