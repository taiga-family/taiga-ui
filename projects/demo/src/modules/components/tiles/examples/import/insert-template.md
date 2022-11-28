```html
<tui-tiles [(items)]="items">
  <tui-tile
    *ngFor="let item of items"
    [width]="item.w"
    [height]="item.h"
  >
    <tui-svg
      tuiTileHandle
      src="tuiIconDragLarge"
    ></tui-svg>
    {{ item.content }}
  </tui-tile>
</tui-tiles>
```
