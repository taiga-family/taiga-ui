```html
<form [formGroup]="testForm">
  <tui-multi-select formControlName="testValue">
    <tui-data-list-wrapper
      *tuiDataList
      tuiMultiSelectGroup
      [items]="items"
    ></tui-data-list-wrapper>
  </tui-multi-select>
</form>
```
