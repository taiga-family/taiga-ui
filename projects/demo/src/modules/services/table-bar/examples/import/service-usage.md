```ts
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';
// ...
export class AppComponent {
  @ViewChild('tableBarTemplate')
  tableBarTemplate: TemplateRef<Record<string, unknown>>;

  constructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {
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
