```ts
import {tuiObfuscateOptionProvider} from '@taiga-ui/cdk';

@Component({
  standalone: true,
  // ...
  providers: [
    tuiObfuscateOptionProvider({
      default: (value: string, symbol?: string): string => (symbol ?? '*').repeat(value.length),
      recipes: {
        city: (value: string): string => 'x'.repeat(value.length),
      },
    }),
  ],
})
export class Example {}
```
