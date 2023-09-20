```html
<tui-theme-night *ngIf="night$ | async"></tui-theme-night>

<tui-root [tuiMode]="mode">
  <button (click)="night.toggle()">Turn theme</button>
</tui-root>
```
