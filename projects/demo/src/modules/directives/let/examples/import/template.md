```html
<ng-container *tuiLet="someStream | async as streamValue">
  <p>
    {{streamValue}}
    <tui-tooltip [content]="template"></tui-tooltip>
  </p>
  <button
    tuiButton
    type="button"
  >
    Delete {{streamValue}}
  </button>
  <ng-template #template>{{streamValue}} is a current value of a someStream</ng-template>
</ng-container>
```
