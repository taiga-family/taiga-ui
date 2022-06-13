```html
<div
  tuiGroup
  class="group"
>
  <div>
    <tui-input
      formControlName="testValue"
      tuiTextfieldExampleText="House"
      tuiHintContent="Write a number"
      class="tui-group__inherit-item"
    >
      House
    </tui-input>
    <tui-error
      formControlName="testValue"
      [error]="[] | tuiFieldError | async"
    ></tui-error>
  </div>
  <div>
    <tui-input
      formControlName="testValue2"
      tuiTextfieldExampleText="House building"
      tuiHintContent="Write house building"
      class="tui-group__inherit-item"
    >
      House building
    </tui-input>
    <tui-error
      formControlName="testValue2"
      [error]="[] | tuiFieldError | async"
    ></tui-error>
  </div>
  <div>
    <tui-input
      formControlName="testValue3"
      tuiTextfieldExampleText="Apartament number"
      tuiHintContent="Write an apartament number only"
      class="tui-group__inherit-item"
    >
      Apartament
    </tui-input>
    <tui-error
      formControlName="testValue3"
      [error]="[] | tuiFieldError | async"
    ></tui-error>
  </div>
</div>
```
