```html
<tui-textfield
  tuiChevron
  [stringify]="'name' | tuiStringify"
>
  <input
    tuiComboBox
    [(ngModel)]="value"
  />

  <!-- ... -->
</tui-textfield>
```
