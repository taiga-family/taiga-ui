```html
<button
  tuiButton
  type="button"
  tuiHint="Custom host with text tooltip"
>
  Press me
</button>
<button
  tuiButton
  type="button"
  [tuiHint]="template"
>
  Press him ↑
</button>

<ng-template #template>Reusable template</ng-template>
```
