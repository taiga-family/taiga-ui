```html
<tui-textfield
  tuiChevron
  [stringify]="items | tuiStringifyValues: 'email' : 'name'"
>
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
