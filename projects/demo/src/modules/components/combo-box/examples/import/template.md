```html
<tui-textfield tuiChevron>
  <input
    tuiComboBox
    [(ngModel)]="value"
  />

  <tui-data-list-wrapper
    *tuiTextfieldDropdown
    [items]="items"
  />
</tui-textfield>
```
