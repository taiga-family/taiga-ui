```html
<tui-textfield tuiChevron>
  <input
    tuiSelect
    [(ngModel)]="value"
  />

  <tui-data-list-wrapper
    *tuiTextfieldDropdown
    [items]="items"
  />
</tui-textfield>
```
