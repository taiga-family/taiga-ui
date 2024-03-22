```html
Router links:
<tui-tabs>
  <a
    tuiTab
    routerLink="/page-1"
    routerLinkActive
  >
    Page 1
  </a>
  <a
    tuiTab
    routerLink="/page-2"
    routerLinkActive
  >
    Page 2
  </a>
</tui-tabs>

Buttons:
<tui-tabs [(activeItemIndex)]="activeItemIndex">
  <button
    tuiTab
    (click)="onTabClick(1)"
  >
    Page 1
  </button>
  <button
    tuiTab
    (click)="onTabClick(2)"
  >
    Page 2
  </button>
</tui-tabs>
```
