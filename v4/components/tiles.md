# Tiles

- **Package**: `KIT`
- **Type**: components

`Tiles` is a light-weight touch-friendly tiles grid drag and drop component with no predefined styles.

### How to Use (Import)

```ts
import {TuiTiles} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTiles,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
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
```

### Example

```html
<tui-tiles class="tiles" [(order)]="order" >
<tui-tile *ngFor="let item of items; let index = index" tuiTileHandle [style.order]="order.get(index)" >
<div class="content">{{ item.name }}</div>
</tui-tile>
</tui-tiles>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [debounce] | `number` | Debounce for the tile order change output. |
| [(order)] | `Map<number, number>` | The order of the tiles. |
| [width] | `number` | Width of the tile. |
| [height] | `number` | Height of the tile. |
| [tuiTileHandle] | `Directive` | Directive to determine the handle of the tui-tile. |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (orderChange) | `Map<number, number>` | Output for tile order change. |

### Usage Examples

#### Basic

**Template:**
```html
<tui-tiles class="tiles" [debounce]="500" [(order)]="order" >
<tui-tile *ngFor="let item of items; let index = index" class="tile" [height]="item.h" [style.order]="order.get(index)" [width]="item.w" >
<div class="content" [class.rick]="item.content === 'rick'" >
<iframe *ngIf="item.content === 'rick'; else default" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0" src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&autohide=1&showinfo=0&controls=0" title="YouTube video player" class="rick" ></iframe>
<tui-icon icon="@tui.grip-vertical" tuiTileHandle class="handle" />
<tui-icon icon="@tui.grip-vertical" tuiTileHandle class="handle" />
<ng-template #default>
<h2 class="title">{{ item.content }}</h2> Order - {{ order.get(index) ?? index }} </ng-template>
</div>
</tui-tile>
</tui-tiles>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, NgIf, TuiIcon, TuiTiles],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = [
        {w: 1, h: 1, content: 'Item 1'},
        {w: 1, h: 1, content: 'Item 2'},
        {w: 2, h: 1, content: 'Item 3'},
        {w: 1, h: 1, content: 'Item 4'},
        {w: 3, h: 1, content: 'Item 5'},
        {w: 1, h: 1, content: 'Item 6'},
        {w: 2, h: 2, content: 'rick'},
        {w: 1, h: 1, content: 'Item 8'},
        {w: 1, h: 1, content: 'Item 9'},
    ];

    protected order = new Map();
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.tiles {
    gap: 1rem;
    grid-auto-rows: minmax(6.25rem, auto);
}

.tile::before {
    content: 'Drop here';
    display: flex;
    block-size: 100%;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: var(--tui-border-normal);
    border-radius: var(--tui-radius-l);
    border: 2px dashed var(--tui-border-normal);
}

.content {
    .transition(box-shadow);

    block-size: 100%;
    padding: 1rem;
    background: var(--tui-background-base);
    box-sizing: border-box;
    border-radius: var(--tui-radius-l);
    border: 1px solid var(--tui-border-normal);
    overflow: hidden;

    tui-tile._dragged & {
        box-shadow: var(--tui-shadow-small-hover);
    }
}

.rick {
    inline-size: 100%;
    block-size: 100%;
    padding: 0;
}

.title {
    margin: 0 0 1rem;
}

.handle {
    .transition(opacity);

    position: absolute;
    right: 0.75rem;
    top: 1rem;
    background: var(--tui-background-base);
    opacity: 0;
    cursor: move;

    tui-tiles:not(._dragged) tui-tile:hover &,
    tui-tile._dragged & {
        opacity: 0.7;
    }
}
```

#### Vertical

**Template:**
```html
<tui-tiles class="tiles" [(order)]="order" >
<tui-tile *ngFor="let item of items; let index = index" tuiTileHandle class="tile" [class.tile_tall]="item === 'John Cleese'" [style.order]="order.get(index)" >
<div class="content">{{ item }}</div>
</tui-tile>
</tui-tiles>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiTiles],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
    protected order = new Map();
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.tiles {
    inline-size: 10rem;
    gap: 1rem;
    grid-auto-rows: minmax(var(--tui-height-m), auto);
}

@media @tui-mobile {
    .tile_tall {
        --tui-height: 2;
    }
}

.content {
    .transition(box-shadow);

    display: flex;
    block-size: 100%;
    align-items: center;
    padding: 0 1rem;
    background: var(--tui-background-base);
    border-radius: var(--tui-radius-l);
    border: 1px solid var(--tui-border-normal);
    cursor: ns-resize;

    tui-tile._dragged & {
        box-shadow: var(--tui-shadow-small-hover);
    }
}
```

#### Nested tiles

**Template:**
```html
<tui-tiles class="tiles" [debounce]="500" [(order)]="order" >
<ng-container *ngFor="let item of items; let i = index">
<tui-tile class="tile" [style.order]="order.get(i)" >
<div class="content">
<tui-icon icon="@tui.grip-vertical" tuiTileHandle class="handle" />
<strong>{{ item.content }}</strong>
<p>Order - {{ order.get(i) ?? i }}</p>
<tui-tiles class="nested" [(order)]="item.order" >
<ng-container *ngFor="let child of items; let j = index">
<tui-tile tuiTileHandle class="tile" [style.order]="item.order.get(j)" >
<div class="content"> {{ child.content }} </div>
</tui-tile>
</ng-container>
</tui-tiles>
</div>
</tui-tile>
</ng-container>
</tui-tiles>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiIcon, TuiTiles],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = [
        {content: 'Item 1', order: new Map()},
        {content: 'Item 2', order: new Map()},
        {content: 'Item 3', order: new Map()},
        {content: 'Item 4', order: new Map()},
    ];

    protected order = new Map();
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.tiles {
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 15rem;
}

.nested {
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 3.5rem;
}

.tile::before {
    content: 'Drop here';
    display: flex;
    block-size: 100%;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: var(--tui-border-normal);
    border-radius: var(--tui-radius-l);
    border: 2px dashed var(--tui-border-normal);
}

.content {
    .transition(box-shadow);

    block-size: 100%;
    padding: 1rem;
    background: var(--tui-background-base);
    box-sizing: border-box;
    border-radius: var(--tui-radius-l);
    border: 1px solid var(--tui-border-normal);
    overflow: hidden;

    tui-tile._dragged & {
        box-shadow: var(--tui-shadow-small-hover);
    }

    tui-tile._dragged tui-tile:not(._dragged) & {
        box-shadow: none;
    }
}
```
