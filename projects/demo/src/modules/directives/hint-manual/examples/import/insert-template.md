```html
<button
  tuiButton
  type="button"
  tuiHint="Custom host with text tooltip"
  [tuiHintManual]="true"
>
  Press me
</button>

<button
  tuiButton
  type="button"
  [tuiHint]="template"
  [tuiHintManual]="true"
>
  Press that ↑
</button>

<ng-template #template>Reusable template</ng-template>
```
