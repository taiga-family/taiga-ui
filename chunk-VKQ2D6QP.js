import"./chunk-HU6DUUP4.js";var i=`<tui-tiles
    class="tiles"
    [debounce]="500"
    [(order)]="order"
>
    @for (item of items; track item; let i = $index) {
        <tui-tile
            class="tile"
            [style.order]="order.get(i)"
        >
            <div class="content">
                <tui-icon
                    icon="@tui.grip-vertical"
                    tuiTileHandle
                    class="handle"
                />
                <strong>{{ item.content }}</strong>
                <p>Order - {{ order.get(i) ?? i }}</p>
                <tui-tiles
                    class="nested"
                    [(order)]="item.order"
                >
                    @for (child of items; track child; let j = $index) {
                        <tui-tile
                            tuiTileHandle
                            class="tile"
                            [style.order]="item.order.get(j)"
                        >
                            <div class="content">
                                {{ child.content }}
                            </div>
                        </tui-tile>
                    }
                </tui-tiles>
            </div>
        </tui-tile>
    }
</tui-tiles>
`;export{i as default};
