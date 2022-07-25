```html
<ng-template #preview>
  <tui-preview>
    <tui-preview-title>{{title}}</tui-preview-title>
    <tui-preview-pagination
      [length]="2"
      [(index)]="index"
    ></tui-preview-pagination>

    <button
      tuiIconButton
      tuiPreviewAction
      icon="tuiIconTrash"
      title="Delete"
      (click)="delete()"
    ></button>
    <button
      tuiIconButton
      tuiPreviewAction
      icon="tuiIconDownload"
      title="Download"
      (click)="download()"
    ></button>

    <img
      *polymorpheusOutlet="previewContent as src"
      alt=""
      [src]="src"
    />
  </tui-preview>
</ng-template>
```
