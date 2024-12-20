```html
<form [formGroup]="form">
  <tui-textfield>
    <label tuiLabel>Card number</label>
    <input
      formControlName="card"
      tuiInputCard
    />
  </tui-textfield>
  <tui-textfield>
    <label tuiLabel>Expire date</label>
    <input
      formControlName="expire"
      tuiInputExpire
    />
  </tui-textfield>
  <tui-textfield>
    <label tuiLabel>CVC/CVV</label>
    <input
      formControlName="cvc"
      tuiInputCVC
    />
  </tui-textfield>
</form>
```
