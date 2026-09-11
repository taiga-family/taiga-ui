import"./chunk-LQ6M4NCU.js";var t=`<cdk-virtual-scroll-viewport
    appendOnly
    itemSize="50"
    tuiScrollRef
    class="example-viewport tui-zero-scrollbar"
>
    <tui-scroll-controls />
    <tui-pull-to-refresh (pulled)="onPull()">
        <div
            *cdkVirtualFor="let item of items"
            class="example-item"
        >
            {{ item }}
        </div>
    </tui-pull-to-refresh>
</cdk-virtual-scroll-viewport>
`;export{t as default};
