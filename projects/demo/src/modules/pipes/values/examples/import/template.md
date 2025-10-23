```html
<tui-textfield tuiChevron>
  <label tuiLabel>Newsletter Email</label>

  <input
    tuiSelect
    [(ngModel)]="value"
  />

  <tui-data-list-wrapper
    *tuiDropdown
    new
    [items]="items | tuiValues: 'email'"
  />
</tui-textfield>
```
