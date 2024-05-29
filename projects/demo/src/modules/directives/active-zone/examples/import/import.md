```ts
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiActiveZoneDirective,
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
