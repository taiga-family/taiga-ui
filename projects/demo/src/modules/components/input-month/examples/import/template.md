```html
<tui-textfield>
  <input
    tuiInputMonth
    [(ngModel)]="value"
  />

  <tui-calendar-month
    *tuiDropdown
    [min]="min"
    [max]="max"
    [disabledItemHandler]="disabledItemHandler"
    [(year)]="activeYear"
  />
</tui-textfield>
```
