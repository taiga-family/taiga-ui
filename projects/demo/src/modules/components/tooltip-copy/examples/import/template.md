```html
<p [tuiTooltipCopy]="tooltip">
  Alexander Inkin

  <ng-template #tooltip>
    <tui-tooltip-copy #manager>
      @let copiedId = manager.copiedId();

      <button
        tuiButton
        tuiSlot="first"
        type="button"
        [iconStart]="copiedId === 'first' ? '@tui.check' : '@tui.copy'"
        (click)="manager.copy('first', 'Alexander Inkin')"
      >
        {{ copiedId === 'first' ? 'Copied' : 'Name' }}
      </button>
    </tui-tooltip-copy>
  </ng-template>
</p>
```
