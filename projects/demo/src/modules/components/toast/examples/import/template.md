```html
<!-- Inline -->
<div tuiToast>
  Notification
  <button
    tuiButton
    type="button"
  >
    Action
  </button>
</div>

<!-- Portal -->
<ng-template [(tuiToast)]="open">
  <button tuiToast>Interactive toast</button>
</ng-template>
```
