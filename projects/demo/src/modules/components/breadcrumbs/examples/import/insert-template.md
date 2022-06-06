```html
<tui-breadcrumbs [size]="size">
  <ng-container *ngFor="let item of items">
    <a
      *tuiBreadcrumb
      tuiLink
      [routerLink]="item.routerLink"
    >
      {{ item.caption }}
    </a>
  </ng-container>
</tui-breadcrumbs>
```
