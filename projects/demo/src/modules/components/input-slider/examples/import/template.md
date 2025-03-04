```html
<tui-textfield>
  <input
    tuiInputSlider
    prefix="$"
    postfix="%"
    [min]="0"
    [max]="100"
    [tuiNumberFormat]="{precision: 3}"
    [(ngModel)]="value"
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
