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
      recipes: {
        phone: (value: string): string => 'xxx',
        email: (value: string): string => '###',
      },
    }),
  ],
})
export class Example {}
```
