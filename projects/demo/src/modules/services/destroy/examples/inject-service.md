```ts
import {TuiDestroyService} from '@taiga-ui/cdk';
// ...

@Component()
export class MyComponent {
  private readonly destroy$ = inject(TuiDestroyService, {self: true});
}
```
