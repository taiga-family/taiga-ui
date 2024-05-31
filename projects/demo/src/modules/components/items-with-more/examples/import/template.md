```html
<tui-items-with-more>
  <ng-container *ngFor="let item of items">
    <span *tuiItem>{{ item }}</span>
  </ng-container>
  <ng-template
    tuiMore
    let-index
  >
    and {{ items.length - index - 1 }} more
  </ng-template>
</tui-items-with-more>
```
