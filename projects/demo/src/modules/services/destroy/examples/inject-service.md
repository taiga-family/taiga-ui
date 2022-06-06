```ts
import {TuiDestroyService} from '@taiga-ui/cdk';

export class MyComponent {
  constructor(@Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService) {}
}
```
