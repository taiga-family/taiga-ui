```ts
import {TuiActionsBarsService} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  // ..
})
export class AppComponent {
  private readonly actionsBarsService = inject(TuiActionsBarsService);

  @ViewChild('actionsBarTemplate')
  actionsBarTemplate: TemplateRef<Record<string, unknown>>;

  constructor() {
    // ...
    this.actionsBarsService.open(this.actionsBarTemplate).subscribe();
    // ...
  }
}
```
