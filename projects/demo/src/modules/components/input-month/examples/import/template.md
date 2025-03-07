```html
<tui-textfield>
  <input
    tuiInputMonth
    [(ngModel)]="value"
  />

  <tui-calendar-month
    *tuiTextfieldDropdown
    [min]="min"
    [max]="max"
    [disabledItemHandler]="disabledItemHandler"
    [(year)]="activeYear"
  />
</tui-textfield>
```
