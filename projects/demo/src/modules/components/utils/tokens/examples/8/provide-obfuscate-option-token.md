```ts
import {tuiObfuscateOptionProvider} from '@taiga-ui/cdk';

@Component({
  standalone: true,
  // ...
  providers: [
    tuiObfuscateOptionProvider({
      default: (value): string => '*'.repeat(value.length),
      recipes: {
        city: (value: string): string => `${value.slice(0, 2)}**`,
      },
    }),
  ],
})
export class Example {}
```
