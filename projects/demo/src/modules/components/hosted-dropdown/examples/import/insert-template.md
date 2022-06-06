```html
<tui-hosted-dropdown
  [content]="dropdown"
  [(open)]="open"
>
  <button
    tuiButton
    type="button"
  >
    Open menu
  </button>
</tui-hosted-dropdown>
<ng-template #dropdown>
  <tui-data-list>
    <button
      *ngFor="let item of items"
      tuiOption
      (click)="onClick()"
    >
      {{item}}
    </button>
  </tui-data-list>
</ng-template>
```
