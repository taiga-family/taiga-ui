```ts
import {TuiTagModule, tuiTagOptionsProvider} from '@taiga-ui/legacy';
// ...

@Component({
  standalone: true,
  imports: [TuiTagModule],
  providers: [
    tuiTagOptionsProvider({
      size: 'l',
      status: 'success',
    }),
  ],
})
export class Example {}
```
