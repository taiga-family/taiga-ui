```ts
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';
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
    this.tableBarsService
      .showTableBar(this.tableBarTemplate, {
        mode: 'onLight',
        hasCloseButton: true,
      })
      .subscribe();
    // ...
  }
}
```
