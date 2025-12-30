```ts
import {inject, TemplateRef, viewChild} from '@angular/core';
import {TuiPreviewDialogService} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {TuiDialogContext} from '@taiga-ui/core';

@Component({
  // ...
})
export class Example {
  private readonly previewDialogService = inject(TuiPreviewDialogService);
  private readonly preview = viewChild('preview', {read: TemplateRef});

  show() {
    this.previewDialogService.open(this.preview()).subscribe();
  }
}
```
