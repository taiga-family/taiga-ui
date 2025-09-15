```html
<tui-textfield tuiChevron>
  <input
    tuiComboBox
    [(ngModel)]="value"
  />

  <tui-data-list-wrapper
    *tuiTextfieldDropdown
    new
    [items]="items"
  />
</tui-textfield>
```
