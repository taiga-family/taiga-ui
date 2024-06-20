```ts
import {, inject, TemplateRef, ViewChild} from '@angular/core';
import {TuiPreviewDialogService} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {TuiDialogContext} from '@taiga-ui/core';

@Component({
  // ...
})
export class Example {
  private readonly previewDialogService = inject(TuiPreviewDialogService);

  @ViewChild(`preview`)
  readonly preview: TemplateRef<TuiDialogContext<void>>;

  show() {
    this.previewDialogService.open(this.preview).subscribe();
  }
}
```
