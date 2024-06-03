```html
<form [formGroup]="form">
  <tui-filter
    formControlName="filters"
    [badgeHandler]="badgeHandler"
    [disabledItemHandler]="disabledItemHandler"
    [items]="items"
    [size]="size"
    (toggledItem)="onToggledItemChange($event)"
  ></tui-filter>
</form>
```
