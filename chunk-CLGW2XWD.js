import"./chunk-HU6DUUP4.js";var t=`<tui-tiles
    class="tiles"
    [debounce]="500"
    [(order)]="order"
>
    @for (item of items; track item) {
        <tui-tile
            class="tile"
            [height]="item.h"
            [style.order]="order.get($index)"
            [width]="item.w"
        >
            <div
                class="content"
                [class.rick]="item.content === 'rick'"
            >
                @if (item.content === 'rick') {
                    <iframe
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?modestbranding=1&autohide=1&showinfo=0&controls=0"
                        title="YouTube video player"
                        class="rick"
                    ></iframe>
                } @else {
                    <h2 class="title">{{ item.content }}</h2>
                    Order - {{ order.get($index) ?? $index }}
                }
                <tui-icon
                    icon="@tui.grip-vertical"
                    tuiTileHandle
                    class="handle"
                />
                <tui-icon
                    icon="@tui.grip-vertical"
                    tuiTileHandle
                    class="handle"
                />
            </div>
        </tui-tile>
    }
</tui-tiles>
`;export{t as default};
