```html
<form [formGroup]="testForm">
  <tui-textfield>
    <input
      tuiInputPhoneInternational
      formControlName="testValue"
      [countries]="countries"
    />
  </tui-textfield>
</form>
```
