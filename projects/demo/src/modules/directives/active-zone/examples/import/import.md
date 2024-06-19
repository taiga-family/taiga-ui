```ts
import {TuiActiveZone} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiActiveZone,
  ],
  // ...
})
export class Example {
  active = false;

  onActiveZone(active: boolean) {
    this.active = active;
  }
}
```
