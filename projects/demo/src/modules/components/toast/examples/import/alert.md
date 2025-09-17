```ts
import {TuiToastService} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiToast,
  ],
  // ...
})
export class Example {
  private readonly toast = inject(TuiToastService);

  public show(): void {
    this.toast.show('Notification');
  }
}
```
