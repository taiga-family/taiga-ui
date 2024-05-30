```ts
import {TuiTableBarsService} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  // ..
})
export class AppComponent {
  private readonly tableBarsService = inject(TuiTableBarsService);

  @ViewChild('tableBarTemplate')
  tableBarTemplate: TemplateRef<Record<string, unknown>>;

  constructor() {
    // ...
    this.tableBarsService.open(this.tableBarTemplate).subscribe();
    // ...
  }
}
```
