```html
<tui-textfield>
  <input
    tuiInputMonth
    [min]="min"
    [max]="max"
    [(ngModel)]="value"
  />

  <tui-calendar-month
    *tuiTextfieldDropdown
    [disabledItemHandler]="disabledItemHandler"
    [(year)]="activeYear"
  />
</tui-textfield>
```
