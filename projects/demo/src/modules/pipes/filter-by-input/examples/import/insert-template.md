```html
<tui-input [formControl]="user">
  User
  <tui-data-list-wrapper
    *tuiDataList
    [items]="items | tuiFilterByInput"
  ></tui-data-list-wrapper>
</tui-input>
```
