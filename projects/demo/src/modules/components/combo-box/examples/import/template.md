```html
<tui-textfield tuiChevron>
  <input
    tuiComboBox
    [(ngModel)]="value"
  />

  <tui-data-list-wrapper
    *tuiDropdown
    [items]="items"
  />
</tui-textfield>
```
