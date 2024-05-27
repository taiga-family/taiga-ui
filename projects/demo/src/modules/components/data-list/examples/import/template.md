```html
<tui-data-list role="menu">
  <tui-opt-group
    *ngFor="let group of groups"
    [label]="group.label"
  >
    <a
      *ngFor="let item of group.items"
      tuiOption
      role="menuitem"
      [routerLink]="item.routerLink"
    >
      {{item.label}}
    </a>
  </tui-opt-group>
</tui-data-list>
```
