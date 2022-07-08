```html
<tui-breadcrumbs [size]="size">
  <ng-container *ngFor="let item of items">
    <a
      *tuiItem
      tuiLink
      [routerLink]="item.routerLink"
    >
      {{ item.caption }}
    </a>
  </ng-container>
</tui-breadcrumbs>
```
