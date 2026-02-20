import"./chunk-HU6DUUP4.js";var i=`<tui-doc-page
    header="Tiles"
    package="KIT"
    type="components"
>
    <ng-template pageTab>
        <p>
            <code>Tiles</code>
            is a light-weight touch-friendly tiles grid drag and drop component with no predefined styles.
        </p>

        <tui-doc-example
            heading="Basic"
            [component]="1 | tuiComponent"
            [content]="1 | tuiExample"
            [fullsize]="true"
        />

        <tui-doc-example
            description="With media query width control"
            heading="Vertical"
            [component]="2 | tuiComponent"
            [content]="2 | tuiExample"
        />

        <tui-doc-example
            heading="Nested tiles"
            [component]="3 | tuiComponent"
            [content]="3 | tuiExample"
            [fullsize]="true"
        />
    </ng-template>

    <ng-template pageTab>
        <tui-doc-demo>
            <tui-tiles
                class="tiles"
                [(order)]="order"
            >
                @for (item of items; track item) {
                    <tui-tile
                        tuiTileHandle
                        [style.order]="order.get($index)"
                    >
                        <div class="content">{{ item.name }}</div>
                    </tui-tile>
                }
            </tui-tiles>
        </tui-doc-demo>
        <table tuiDocAPI>
            <tbody>
                <tr>
                    <td colspan="3">
                        <span tuiTitle>
                            <strong>Tui Tiles</strong>
                            <span tuiSubtitle>
                                Applied to
                                <code>&#60;tui-tiles&gt;</code>
                                component.
                            </span>
                        </span>
                    </td>
                </tr>
                <tr
                    name="[debounce]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="debounce"
                >
                    Debounce for the tile order change output.
                </tr>
                <tr
                    name="[(order)]"
                    tuiDocAPIItem
                    type="Map<number, number>"
                    [(value)]="order"
                >
                    The order of the tiles.
                </tr>
                <tr
                    name="(orderChange)"
                    tuiDocAPIItem
                    type="Map<number, number>"
                >
                    Output for tile order change.
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td colspan="3">
                        <span tuiTitle>
                            <strong>Tui Tile</strong>
                            <span tuiSubtitle>
                                Applied to
                                <code>&#60;tui-tile&gt;</code>
                                component.
                            </span>
                        </span>
                    </td>
                </tr>
                <tr
                    name="[width]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="width"
                >
                    Width of the tile.
                </tr>
                <tr
                    name="[height]"
                    tuiDocAPIItem
                    type="number"
                    [(value)]="height"
                >
                    Height of the tile.
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td colspan="3">
                        <span tuiTitle>
                            <strong>Directive</strong>
                            <span tuiSubtitle>Applied as a directive.</span>
                        </span>
                    </td>
                </tr>
                <tr
                    name="[tuiTileHandle]"
                    tuiDocAPIItem
                    type="Directive"
                >
                    Directive to determine the handle of the tui-tile.
                </tr>
            </tbody>
        </table>
    </ng-template>
</tui-doc-page>
`;export{i as default};
