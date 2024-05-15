```ts
import {Component, inject, TemplateRef, ViewChild} from '@angular/core';
import {TuiPreviewDialogService} from '@taiga-ui/addon-preview';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TuiDialogContext} from '@taiga-ui/core';

@Component({
  // ...
})
export class SomeComponent {
  private readonly previewDialogService = inject(TuiPreviewDialogService);

  @ViewChild(`preview`)
  readonly preview: TemplateRef<TuiDialogContext<void>>;

  show() {
    this.previewDialogService.open(this.preview).subscribe();
  }
}
```
