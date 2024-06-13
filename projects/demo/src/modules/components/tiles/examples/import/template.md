```html
<tui-tiles [(items)]="items">
  <tui-tile
    *ngFor="let item of items"
    [width]="item.w"
    [height]="item.h"
  >
    <tui-icon
      tuiTileHandle
      icon="tuiIconDragLarge"
    />
    {{ item.content }}
  </tui-tile>
</tui-tiles>
```
