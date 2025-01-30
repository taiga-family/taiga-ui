```html
<tui-textfield
  tuiInputSlider
  [(ngModel)]="value"
>
  <input
    tuiInputNumber
    prefix="$"
    postfix="%"
    [min]="0"
    [max]="100"
    [tuiNumberFormat]="{precision: 3}"
  />

  <input
    tuiSlider
    type="range"
    [keySteps]="keySteps"
    [segments]="segments"
    [step]="step"
  />
</tui-textfield>
```
