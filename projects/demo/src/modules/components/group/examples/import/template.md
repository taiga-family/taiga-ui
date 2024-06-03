```html
<div
  class="group"
  tuiGroup
>
  <div>
    <tui-input
      class="tui-group__inherit-item"
      formControlName="testValue"
      tuiHintContent="Write a number"
    >
      House
      <input
        tuiTextfieldLegacy
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
      class="tui-group__inherit-item"
      formControlName="testValue2"
      tuiHintContent="Write house building"
    >
      House building
      <input
        tuiTextfieldLegacy
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
      class="tui-group__inherit-item"
      formControlName="testValue3"
      tuiHintContent="Write an apartment number only"
    >
      Apartment
      <input
        tuiTextfieldLegacy
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
