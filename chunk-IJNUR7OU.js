import"./chunk-HU6DUUP4.js";var i=`<button
    type="button"
    (click)="add()"
>
    Add
</button>
<tui-scrollbar>
    <cdk-virtual-scroll-viewport
        appendOnly
        itemSize="50"
        tuiScrollable
        class="example-viewport tui-zero-scrollbar"
    >
        <div
            *cdkVirtualFor="let item of items"
            class="example-item"
        >
            {{ item }}
        </div>
    </cdk-virtual-scroll-viewport>
</tui-scrollbar>
`;export{i as default};
