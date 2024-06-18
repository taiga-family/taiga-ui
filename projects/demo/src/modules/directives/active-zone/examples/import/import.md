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
export class MyComponent {
  active = false;

  onActiveZone(active: boolean) {
    this.active = active;
  }
}
```
