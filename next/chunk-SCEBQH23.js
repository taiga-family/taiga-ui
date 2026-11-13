import"./chunk-LQ6M4NCU.js";var t=`<tui-tiles
    class="tiles"
    [(order)]="order"
>
    @for (item of items; track item) {
        <tui-tile
            tuiTileHandle
            [class.tall]="item === 'John Cleese'"
            [style.order]="order.get($index)"
        >
            <div class="content">
                {{ item }}
                @if (item === 'John Cleese') {
                    <b>Silly walks</b>
                }
            </div>
        </tui-tile>
    }
</tui-tiles>
`;export{t as default};
