```ts
import {TuiObfuscatePipe} from '@taiga-ui/cdk';

//...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiObfuscatePipe,
  ],
  //  ...
  providers: [
    tuiObfuscateOptionProvider({
      default: (value: string, symbol?: string): string => (symbol ?? '*').repeat(value.length),
      recipes: {
        phone: (value: string): string => 'xxx',
        email: (value: string): string => '###',
      },
    }),
  ],
})
export class Example {}
```
