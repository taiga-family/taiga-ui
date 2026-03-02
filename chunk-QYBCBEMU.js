import"./chunk-HU6DUUP4.js";var l=`<tui-tree
    class="tree"
    [childrenHandler]="handler"
    [class._dragged]="drag()"
    [content]="content"
    [tuiTreeController]="true"
    [value]="data"
>
    <ng-template
        #content
        let-value
    >
        @if (!value.children) {
            <div class="wrapper">
                <div
                    class="drop"
                    (pointerup)="onDrop(value)"
                ></div>
                <tui-tiles class="tiles">
                    <tui-tile>
                        <div
                            tuiTileHandle
                            class="content"
                            (pointerdown)="onDrag(value)"
                        >
                            {{ value.text }}
                        </div>
                    </tui-tile>
                </tui-tiles>
                <div
                    class="drop"
                    (pointerup)="onDrop(value, 1)"
                ></div>
            </div>
        } @else {
            {{ value.text }}
        }
    </ng-template>
</tui-tree>
`;export{l as default};
