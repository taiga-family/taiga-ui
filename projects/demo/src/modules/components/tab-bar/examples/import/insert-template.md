```html
<tui-root>
  Your app
  <nav
    tuiTabBar
    ngProjectAs="tuiOverContent"
  >
    <a
      *ngFor="let item of items"
      tuiTabBarItem
      routerLinkActive
      [routerLink]="item.path"
      [icon]="item.icon"
    >
      {{ item.text}}
    </a>
  </nav>
</tui-root>
```
