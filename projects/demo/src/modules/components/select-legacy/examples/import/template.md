```html
<form [formGroup]="testForm">
  <tui-select formControlName="testValue">
    <tui-data-list-wrapper
      *tuiDataList
      [items]="items"
    ></tui-data-list-wrapper>
  </tui-select>
</form>
```
