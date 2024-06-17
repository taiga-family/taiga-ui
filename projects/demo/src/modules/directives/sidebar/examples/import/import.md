```ts
import {TuiSidebar} from '@taiga-ui/addon-mobile';
import {TuiActiveZone} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSidebar,
    TuiActiveZone,
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
