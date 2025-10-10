```html
<tui-textfield
  tuiChevron
  [stringify]="stringify"
>
  <input
    tuiComboBox
    [(ngModel)]="value"
  />

  <tui-data-list-wrapper
    *tuiDropdown
    new
    [items]="items"
    [itemContent]="stringify | tuiStringifyContent"
  ></tui-data-list-wrapper>
</tui-textfield>
```
