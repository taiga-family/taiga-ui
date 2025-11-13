import"./chunk-42JZD6NG.js";var i=`<tui-tiles
    class="tiles"
    [(order)]="order"
>
    @for (item of items; track item) {
        <tui-tile
            tuiTileHandle
            class="tile"
            [class.tile_tall]="item === 'John Cleese'"
            [style.order]="order.get($index)"
        >
            <div class="content">{{ item }}</div>
        </tui-tile>
    }
</tui-tiles>
`;export{i as default};
