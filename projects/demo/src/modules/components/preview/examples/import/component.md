```ts
import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {TuiPreviewDialogService} from '@taiga-ui/addon-preview';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {TuiDialogContext} from '@taiga-ui/core';

@Component({
  // ...
})
export class SomeComponent {
  @ViewChild('preview')
  readonly preview: TemplateRef<TuiDialogContext<void>>;

  constructor(@Inject(TuiPreviewDialogService) private readonly previewDialogService: TuiPreviewDialogService) {}

  show() {
    this.previewDialogService.open(this.preview).subscribe();
  }
}
```
