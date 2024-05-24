```ts
import {tuiTagOptionsProvider} from '@taiga-ui/legacy';
// ...

@Component({
  standalone: true,
  providers: [
    tuiTagOptionsProvider({
      size: 'l',
      status: 'success',
    }),
  ],
})
export class MyComponent {}
```
