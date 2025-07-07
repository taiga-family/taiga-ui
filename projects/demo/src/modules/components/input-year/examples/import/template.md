```html
<tui-textfield #textfield>
  <input
    tuiInputYear
    [(ngModel)]="value"
  />

  <tui-calendar-year
    *tuiTextfieldDropdown
    [value]="value"
    (yearClick)="textfield.handleOption($event)"
  />
</tui-textfield>
```
