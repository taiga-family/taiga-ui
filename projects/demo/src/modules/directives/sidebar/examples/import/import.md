```ts
import {TuiSidebarDirective} from '@taiga-ui/addon-mobile';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSidebarDirective,
    TuiActiveZoneDirective,
  ],
  // ...
})
export class MyComponent {
  open = false;

  toggle(open: boolean) {
    this.open = open;
  }
}
```
