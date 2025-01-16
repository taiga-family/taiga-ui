```html
<tui-textfield>
  <label tuiLabel>Type a sum</label>

  <input
    formControlName="testValue"
    tuiInputNumber
    [prefix]="'USD' | tuiCurrency"
  />
</tui-textfield>
```
