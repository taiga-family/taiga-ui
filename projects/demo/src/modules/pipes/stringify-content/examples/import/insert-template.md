```html
<tui-combo-box
  [stringify]="stringify"
  [(ngModel)]="value"
>
  <tui-data-list-wrapper
    *tuiDataList
    [items]="items"
    [itemContent]="stringify | tuiStringifyContent"
  ></tui-data-list-wrapper>
</tui-combo-box>
```
