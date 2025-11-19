```html
<tui-textfield>
  <label tuiLabel>User</label>
  <input
    [formControl]="control"
    tuiTextfield
  />
  <tui-data-list-wrapper
    *tuiDropdown
    [items]="items | tuiFilterByInput"
  />
</tui-textfield>
```
