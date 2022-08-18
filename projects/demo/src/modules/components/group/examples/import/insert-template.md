```html
<div
  tuiGroup
  class="group"
>
  <div>
    <tui-input
      formControlName="testValue"
      tuiHintContent="Write a number"
      class="tui-group__inherit-item"
    >
      House
      <input
        tuiTextfield
        placeholder="House"
      />
    </tui-input>
    <tui-error
      formControlName="testValue"
      [error]="[] | tuiFieldError | async"
    ></tui-error>
  </div>
  <div>
    <tui-input
      formControlName="testValue2"
      tuiHintContent="Write house building"
      class="tui-group__inherit-item"
    >
      House building
      <input
        tuiTextfield
        placeholder="House building"
      />
    </tui-input>
    <tui-error
      formControlName="testValue2"
      [error]="[] | tuiFieldError | async"
    ></tui-error>
  </div>
  <div>
    <tui-input
      formControlName="testValue3"
      tuiHintContent="Write an apartament number only"
      class="tui-group__inherit-item"
    >
      Apartament
      <input
        tuiTextfield
        placeholder="Apartment number"
      />
    </tui-input>
    <tui-error
      formControlName="testValue3"
      [error]="[] | tuiFieldError | async"
    ></tui-error>
  </div>
</div>
```
