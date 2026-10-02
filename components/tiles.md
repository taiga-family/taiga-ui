# Tiles

- **Package**: `KIT`
- **Type**: components

`Tiles` is a light-weight touch-friendly tiles grid drag and drop component with no predefined styles.

### Example

```html
<tui-tiles class="tiles" [(order)]="order" > @for (item of items; track item) { <tui-tile tuiTileHandle [style.order]="order.get($index)" >
<div class="content">{{ item.name }}</div>
</tui-tile> } </tui-tiles>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [debounce] | `number` | debounce for the tile order change output. |
| [(order)] | `Map<number, number>` | the order of the tiles. |
| [width] | `number` | width of the tile. |
| [height] | `number` | height of the tile. |
| [tuiTileHandle] | `Directive` | directive to determine the handle of the tui-tile. |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (orderChange) | `Map<number, number>` | output for tile order change. |

### Usage Examples

#### Basic

**Template:**
```html
<tui-tiles class="tiles" [debounce]="500" [(order)]="order" > @for (item of items; track item) { <tui-tile class="tile" [height]="item.h" [style.order]="order.get($index)" [width]="item.w" >
<div class="content" [class.rick]="item.content === 'rick'" > @if (item.content === 'rick') { <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&autohide=1&showinfo=0&controls=0" title="YouTube video player" class="rick" ></iframe> } @else { <h2 class="title">{{ item.content }}</h2> Order - {{ order.get($index) ?? $index }} } <tui-icon icon="@tui.grip-vertical" tuiTileHandle class="handle" />
<tui-icon icon="@tui.grip-vertical" tuiTileHandle class="handle" />
</div>
</tui-tile> } </tui-tiles>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    imports: [TuiIcon, TuiTiles],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
@import '@taiga-ui/styles/utils';

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
    inset-inline-end: 0.75rem;
    inset-block-start: 1rem;
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
<tui-tiles class="tiles" [(order)]="order" > @for (item of items; track item) { <tui-tile tuiTileHandle class="tile" [class.tile_tall]="item === 'John Cleese'" [style.order]="order.get($index)" >
<div class="content">{{ item }}</div>
</tui-tile> } </tui-tiles>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    imports: [TuiTiles],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
@import '@taiga-ui/styles/utils';

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
<tui-tiles class="tiles" [debounce]="500" [(order)]="order" > @for (item of items; track item; let i = $index) { <tui-tile class="tile" [style.order]="order.get(i)" >
<div class="content">
<tui-icon icon="@tui.grip-vertical" tuiTileHandle class="handle" />
<strong>{{ item.content }}</strong>
<p>Order - {{ order.get(i) ?? i }}</p>
<tui-tiles class="nested" [(order)]="item.order" > @for (child of items; track child; let j = $index) { <tui-tile tuiTileHandle class="tile" [style.order]="item.order.get(j)" >
<div class="content"> {{ child.content }} </div>
</tui-tile> } </tui-tiles>
</div>
</tui-tile> } </tui-tiles>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    imports: [TuiIcon, TuiTiles],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
@import '@taiga-ui/styles/utils';

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

#### Table

**Template:**
```html
<div role="table">
<div role="row">
<span aria-label="Reorder" role="columnheader" ></span>
<span role="columnheader">Name</span>
<span role="columnheader">Role</span>
<span role="columnheader">Email</span>
</div>
<tui-tiles role="rowgroup" [(order)]="order" > @for (item of items; track item) { <tui-tile [style.order]="order.get($index)">
<div role="row">
<span role="cell">
<tui-icon icon="@tui.grip-vertical" tuiTileHandle />
</span>
<span role="cell">{{ item.name }}</span>
<span role="cell">{{ item.role }}</span>
<span role="cell">{{ item.email }}</span>
</div>
</tui-tile> } </tui-tiles>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiTiles} from '@taiga-ui/kit';

@Component({
    imports: [TuiIcon, TuiTiles],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {name: 'John Cleese', role: 'Actor', email: 'john.cleese@example.com'},
        {name: 'Eric Idle', role: 'Actor', email: 'eric.idle@example.com'},
        {name: 'Graham Chapman', role: 'Actor', email: 'graham.chapman@example.com'},
        {name: 'Michael Palin', role: 'Actor', email: 'michael.palin@example.com'},
    ];

    protected order = new Map();
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

[role='table'] {
    inline-size: 100%;
    min-inline-size: 35rem;
    border: 1px solid var(--tui-border-normal);
    border-radius: var(--tui-radius-l);
    overflow: hidden;

    > [role='row'] {
        color: var(--tui-text-secondary);
        background: var(--tui-background-neutral-1);
        border: none;
    }
}

[role='row'] {
    .transition(box-shadow);

    display: grid;
    grid-template-columns: 2rem minmax(8rem, 1fr) minmax(8rem, 1fr) minmax(12rem, 1.5fr);
    min-block-size: var(--tui-height-m);
    block-size: 100%;
    border-block-start: 1px solid var(--tui-border-normal);
    align-items: center;
    padding: 0 1rem;
    box-sizing: border-box;
    column-gap: 0.75rem;
}

[role='rowgroup'] {
    grid-auto-rows: minmax(var(--tui-height-m), auto);
}

[role='cell'] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

[tuiTileHandle] {
    color: var(--tui-text-secondary);
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
}

tui-tile._dragged [role='row'] {
    background: var(--tui-background-elevation-1);
    box-shadow: var(--tui-shadow-small-hover);
}
```
