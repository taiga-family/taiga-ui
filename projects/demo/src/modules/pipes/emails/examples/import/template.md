```html
<tui-textfield>
  <label tuiLabel>Email</label>
  <input
    tuiTextfield
    [(ngModel)]="value"
  />
  <tui-data-list-wrapper
    *tuiDropdown
    [items]="value | tuiEmails"
  />
  } }
</tui-textfield>
```
