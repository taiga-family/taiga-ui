import"./chunk-LQ6M4NCU.js";var a=`<div
    role="table"
    class="table"
>
    <div
        role="row"
        class="header"
    >
        <span
            aria-label="Reorder"
            role="columnheader"
        ></span>
        <span role="columnheader">Name</span>
        <span role="columnheader">Role</span>
        <span role="columnheader">Email</span>
    </div>

    <tui-tiles
        role="rowgroup"
        class="tiles"
        [(order)]="order"
    >
        @for (item of items; track item) {
            <tui-tile [style.order]="order.get($index)">
                <div
                    role="row"
                    class="row"
                >
                    <span role="cell">
                        <tui-icon
                            icon="@tui.grip-vertical"
                            tuiTileHandle
                            class="handle"
                        />
                    </span>
                    <span
                        role="cell"
                        class="cell"
                    >
                        {{ item.name }}
                    </span>
                    <span
                        role="cell"
                        class="cell"
                    >
                        {{ item.role }}
                    </span>
                    <span
                        role="cell"
                        class="cell"
                    >
                        {{ item.email }}
                    </span>
                </div>
            </tui-tile>
        }
    </tui-tiles>
</div>
`;export{a as default};
