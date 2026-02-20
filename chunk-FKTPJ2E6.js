import"./chunk-HU6DUUP4.js";var r=`<tui-scrollbar>
    <tui-pull-to-refresh (pulled)="onPull()">
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
    </tui-pull-to-refresh>
</tui-scrollbar>
`;export{r as default};
