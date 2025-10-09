```html
<tui-textfield tuiChevron>
  <input
    tuiSelect
    [(ngModel)]="value"
  />

  <tui-data-list-wrapper
    *tuiDropdown
    [items]="items"
  />
</tui-textfield>
```
