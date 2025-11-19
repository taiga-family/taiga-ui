```html
<tui-textfield>
  <label tuiLabel>Account</label>
  <input
    [formControl]="control"
    tuiTextfield
  />
  <tui-data-list-wrapper
    *tuiDropdown
    [items]="items"
  />
</tui-textfield>
```
