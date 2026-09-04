import"./chunk-LQ6M4NCU.js";var i=`<button
    type="button"
    (click)="add()"
>
    Add
</button>
<cdk-virtual-scroll-viewport
    itemSize="50"
    tuiScrollRef
    class="example-viewport"
>
    <tui-scroll-controls />
    <div
        *cdkVirtualFor="let item of items"
        class="example-item"
    >
        {{ item }}
    </div>
</cdk-virtual-scroll-viewport>
`;export{i as default};
