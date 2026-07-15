import"./chunk-HU6DUUP4.js";var l=`<cdk-virtual-scroll-viewport
    appendOnly
    itemSize="50"
    tuiScrollRef
    class="tui-zero-scrollbar"
>
    <tui-scroll-controls />
    <div *cdkVirtualFor="let user of users; templateCacheSize: 0">
        <tui-line-clamp
            [content]="info"
            [lineHeight]="24"
            [linesLimit]="1"
        />

        <ng-template #info>
            <span>#{{ user.id }}:</span>
            <span>{{ user.email }}</span>
            <br />

            <p>User ID: {{ user.id }}</p>
            <p>First Name: {{ user.firstName }}</p>
            <p>Last Name: {{ user.lastName }}</p>
        </ng-template>
    </div>
</cdk-virtual-scroll-viewport>
`;export{l as default};
