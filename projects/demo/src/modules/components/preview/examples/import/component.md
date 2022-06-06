```ts
import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {TuiPreviewService} from '@taiga-ui/addon-preview';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TuiDialogContext} from '@taiga-ui/core';

@Component({
  // ...
})
export class SomeComponent {
  @ViewChild('preview')
  readonly preview: TemplateRef<TuiDialogContext<void>>;

  constructor(@Inject(PreviewDialogService) private readonly previewDialogService: PreviewDialogService) {}

  show() {
    this.previewDialogService.open(this.preview).subscribe();
  }
}
```
