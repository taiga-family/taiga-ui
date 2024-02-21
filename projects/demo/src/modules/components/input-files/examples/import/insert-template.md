```html
<label tuiInputFiles>
  <input
    tuiInputFiles
    accept="image/*"
    [multiple]="true"
    [formControl]="control"
    (reject)="onReject($event)"
  />
</label>

<tui-files>
  <tui-file
    tuiItem
    [file]="file"
  ></tui-file>
</tui-files>
```
