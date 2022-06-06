```html
<button
  tuiButton
  type="button"
  tuiManualHint="Custom host with text tooltip"
  [tuiManualHintShow]="true"
>
  Press me
</button>

<button
  tuiButton
  type="button"
  [tuiManualHint]="template"
  [tuiManualHintShow]="true"
>
  Press that ↑
</button>

<ng-template #template>Reusable template</ng-template>
```
