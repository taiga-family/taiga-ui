```html
<tui-textfield
  tuiInputMonth
  [min]="min"
  [max]="max"
  [(ngModel)]="value"
>
  <input tuiTextfield />

  <tui-calendar-month
    *tuiTextfieldDropdown
    [disabledItemHandler]="disabledItemHandler"
    [(year)]="activeYear"
  />
</tui-textfield>
```
