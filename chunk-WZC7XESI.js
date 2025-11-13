import"./chunk-42JZD6NG.js";var e=`\`\`\`html
<tui-tiles [(order)]="order">
  <tui-tile
    *ngFor="let item of items"
    [width]="item.w"
    [height]="item.h"
  >
    <tui-icon
      tuiTileHandle
      icon="@tui.grip-vertical"
    />
    {{ item.content }}
  </tui-tile>
</tui-tiles>
\`\`\`
`;export{e as default};
