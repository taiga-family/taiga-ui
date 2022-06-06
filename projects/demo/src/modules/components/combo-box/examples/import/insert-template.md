```html
<form [formGroup]="testForm">
  <tui-combo-box formControlName="testValue">
    <tui-data-list-wrapper
      *tuiDataList
      [items]="items"
    ></tui-data-list-wrapper>
  </tui-combo-box>
</form>
```
